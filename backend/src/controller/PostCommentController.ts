import {Controller, Route, Get, Body, Post, Path, Delete, Tags} from "tsoa";
import {PostCommentService} from "../service/PostCommentService";
import {IGeneralComment, IGeneralCommentKeyProps} from "../types/IGeneralComment";


@Route("Comment")
@Tags("PostComment")
export class PostCommentController extends Controller {

    private service = new PostCommentService();


    @Get("{postCommentId}")
    public async get(@Path() postCommentId: string) : Promise<IGeneralComment> {
        return await this.service.getById(postCommentId);
    }

    @Get()
    public async getAll() : Promise<IGeneralComment[]> {
        return await this.service.getAll();
    }

    @Post("create")
    public async create(@Body() body: IGeneralCommentKeyProps) : Promise<IGeneralComment> {
        return await this.service.create(body as IGeneralCommentKeyProps);
    }

    @Delete("{postCommentId}")
    public async delete(@Path() postCommentId: string) : Promise<boolean> {
        return await this.service.deleteById(postCommentId);
    }
}