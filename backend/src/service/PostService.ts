import { PostEntry } from "../db/entry/PostEntry";
import { BaseService } from "./_BaseService";
import { appDataSource } from "../dataSource";
import { IPostProps, IPost } from "../types/IPost";
import { UserService } from "./UserService";
import { PublisherService } from "./PublisherService";

export class PostService extends BaseService<PostEntry> {
	private userService = new UserService();
	private publisherService = new PublisherService();

	constructor() {
		super(appDataSource.getRepository(PostEntry));
	}

	public async create(postProps: IPostProps): Promise<IPost> {
		this.userService.checkEntriesExists(postProps.editorIds, "User");
		this.userService.checkEntryExists(postProps.creatorId, "User");
		this.publisherService.checkEntryExists(postProps.publisherId, "Publisher");

		let post = this.repository.create({
			creationDate: new Date(),
			updateDate: new Date(),
			...postProps,
		});

		post = await this.repository.save(post);

		return post;
	}
}
