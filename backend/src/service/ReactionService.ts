import { ReactionEntry } from "../db/entry/ReactionEntry";
import { BaseService } from "./_BaseService";
import { appDataSource } from "../dataSource";
import { IReaction, IReactionProps } from "../types/IReaction";
import { UserService } from "./UserService";
import { PostService } from "./PostService";
import { CommentService } from "./CommentService";

export class ReactionService extends BaseService<ReactionEntry> {
	private userService = new UserService();
	private postService = new PostService();
	private commentService = new CommentService();

	constructor() {
		super(appDataSource.getRepository(ReactionEntry));
	}

	public async create(reactionProps: IReactionProps): Promise<IReaction> {
		if (reactionProps.referenceType == "COMMENT")
			await this.commentService.checkEntryExists(reactionProps.referenceId, "Comment");
		else await this.postService.checkEntryExists(reactionProps.referenceId, "Post");

		await this.userService.checkEntryExists(reactionProps.userId, "User");

		let reaction = this.repository.create({
			creationDate: new Date(),
			updateDate: new Date(),
			...reactionProps,
		});

		reaction = await this.repository.save(reaction);

		return reaction;
	}

	public async getAllOfType(referenceType: "COMMENT" | "POST"): Promise<IReaction[] | "NOT_FOUND"> {
		const result = await this.repository.find({ where: { referenceType: referenceType } });
		return !result.length ? "NOT_FOUND" : result;
	}

	public async getReactionCountsOf(
		referenceType: "COMMENT" | "POST",
		referenceId: string,
	): Promise<[number, number]> {
		if (referenceType == "POST") await this.postService.checkEntryExists(referenceId, "Post");
		else await this.commentService.checkEntryExists(referenceId, "Comment");

		const likeCount = await this.repository.count({
			where: {
				referenceId: referenceId,
				referenceType: referenceType,
				reactionType: "LIKE",
			},
		});

		const dislikeCount = await this.repository.count({
			where: {
				referenceId: referenceId,
				referenceType: referenceType,
				reactionType: "DISLIKE",
			},
		});

		return [likeCount, dislikeCount];
	}
}
