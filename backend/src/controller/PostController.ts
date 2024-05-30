import { Controller, Route, Get, Body, Post, Path, Delete, Tags } from "tsoa";
import { IPost, IPostProps } from "../types/IPost";
import { PostService } from "../service/PostService";

@Route("Post")
@Tags("Post")
export class PostController extends Controller {
	private service = new PostService();

	@Get("{postId}")
	public async get(@Path() postId: string): Promise<IPost | "NOT_FOUND"> {
		return await this.service.getById(postId);
	}

	@Get()
	public async getAll(): Promise<IPost[] | "NOT_FOUND"> {
		return await this.service.getAll();
	}

	@Post("create")
	public async create(@Body() body: IPostProps): Promise<IPost> {
		return await this.service.create(body as IPostProps);
	}

	@Delete("{postId}")
	public async delete(@Path() postId: string): Promise<boolean> {
		return await this.service.deleteById(postId);
	}
}
