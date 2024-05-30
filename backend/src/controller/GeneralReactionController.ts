import {Body, Controller, Delete, Get, Path, Post, Route, Tags} from "tsoa";
import {CommentReactionService} from "../service/CommentReactionService";
import {IGeneralReaction, IGeneralReactionKeyProps} from "../types/IGeneralReaction";
import {PostReactionService} from "../service/PostReactionService";

@Route("Reaction/Comment")
@Tags("CommentReaction")
export class CommentReactionController extends Controller {
    private service = new CommentReactionService();

    @Get("{reactionId}")
    public async get(
        @Path() reactionId: string
    ) : Promise<IGeneralReaction> {
        return await this.service.getById(reactionId);
    }

    @Get("CountOf/{commentId}")
    public async getCountOf(
        @Path() commentId: string
    ) : Promise<{ likes: number, dislikes: number}> {
        const [likes, dislikes] = await this.service.getReactionCountsOf(commentId);
        return {likes, dislikes};
    }

    @Get()
    public async getAll() : Promise<IGeneralReaction[]> {
        return await this.service.getAll();
    }

    @Post("create")
    public async create(
        @Body() body: IGeneralReactionKeyProps
    ) : Promise<IGeneralReaction> {
        return await this.service.create(body);
    }

    @Delete("{reactionId}")
    public async delete(
        @Path() reactionId: string
    ) : Promise<boolean> {
        return await this.service.deleteById(reactionId);
    }
}


@Tags("PostReaction")
@Route("Reaction/Post")
export class PostReactionController extends Controller {
    private service = new PostReactionService();

    @Get("{reactionId}")
    public async get(
        @Path() reactionId: string
    ) : Promise<IGeneralReaction> {
        return await this.service.getById(reactionId);
    }

    @Get("CountOf/{postId}")
    public async getCountOf(
        @Path() postId: string
    ) : Promise<{ likes: number, dislikes: number}> {
        const [likes, dislikes] = await this.service.getReactionCountsOf(postId);
        return {likes, dislikes};
    }

    @Get()
    public async getAll() : Promise<IGeneralReaction[]> {
        return await this.service.getAll();
    }

    @Post("create")
    public async create(
        @Body() body: IGeneralReactionKeyProps
    ) : Promise<IGeneralReaction> {
        return await this.service.create(body);
    }

    @Delete("{reactionId}")
    public async delete(
        @Path() reactionId: string
    ) : Promise<boolean> {
        return await this.service.deleteById(reactionId);
    }
}
