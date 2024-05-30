import { CommentEntry } from "../db/entry/CommentEntry";
import { BaseService } from "./_BaseService";
import { appDataSource } from "../dataSource";
import { ICommentProps, IComment } from "../types/IComment";
import { PostService } from "./PostService";
import { UserService } from "./UserService";

export class CommentService extends BaseService<CommentEntry> {
	private postService = new PostService();
	private userService = new UserService();

	constructor() {
		super(appDataSource.getRepository(CommentEntry));
	}

	public async create(commentProps: ICommentProps): Promise<IComment> {
		if (commentProps.referenceType == "COMMENT")
			await this.checkEntryExists(commentProps.referenceId, "Comment");
		else await this.postService.checkEntryExists(commentProps.referenceId, "Post");

		await this.userService.checkEntryExists(commentProps.userId, "User");

		let postComment = this.repository.create({
			creationDate: new Date(),
			updateDate: new Date(),
			...commentProps,
		});

		postComment = await this.repository.save(postComment);

		return postComment as IComment;
	}
}
