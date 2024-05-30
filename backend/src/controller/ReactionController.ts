import { Body, Controller, Delete, Get, Path, Post, Route, Tags } from "tsoa";
import { ReactionService } from "../service/ReactionService";
import { IReaction, IReactionProps } from "../types/IReaction";

@Route("Reaction")
@Tags("Reaction")
export class ReactionController extends Controller {
	private service = new ReactionService();

	@Get("{reactionId}")
	public async get(@Path() reactionId: string): Promise<IReaction | "NOT_FOUND"> {
		return await this.service.getById(reactionId);
	}

	@Get("{referenceType}/{referenceId}")
	public async getCountOf(
		@Path() referenceType: "COMMENT" | "POST",
		@Path() referenceId: string,
	): Promise<{ likes: number; dislikes: number }> {
		const [likes, dislikes] = await this.service.getReactionCountsOf(referenceType, referenceId);
		return { likes, dislikes };
	}

	@Get()
	public async getAll(): Promise<IReaction[] | "NOT_FOUND"> {
		return await this.service.getAll();
	}

	@Get("{referenceType}/all")
	public async getAllOfType(@Path() referenceType: "POST" | "COMMENT"): Promise<IReaction[] | "NOT_FOUND"> {
		return await this.service.getAllOfType(referenceType);
	}

	@Post("create")
	public async create(@Body() body: IReactionProps): Promise<IReaction> {
		return await this.service.create(body);
	}

	@Delete("{reactionId}")
	public async delete(@Path() reactionId: string): Promise<boolean> {
		return await this.service.deleteById(reactionId);
	}
}
