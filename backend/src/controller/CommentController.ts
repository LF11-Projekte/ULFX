import { Controller, Route, Get, Body, Post, Path, Delete, Tags } from "tsoa";
import { CommentService } from "../service/CommentService";
import { IComment, ICommentProps } from "../types/IComment";

@Route("Comment")
@Tags("PostComment")
export class PostCommentController extends Controller {
	private service = new CommentService();

	@Get("{postCommentId}")
	public async get(@Path() postCommentId: string): Promise<IComment | "NOT_FOUND"> {
		return await this.service.getById(postCommentId);
	}

	@Get()
	public async getAll(): Promise<IComment[] | "NOT_FOUND"> {
		return await this.service.getAll();
	}

	@Post("create")
	public async create(@Body() body: ICommentProps): Promise<IComment> {
		return await this.service.create(body as ICommentProps);
	}

	@Delete("{postCommentId}")
	public async delete(@Path() postCommentId: string): Promise<boolean> {
		return await this.service.deleteById(postCommentId);
	}
}
