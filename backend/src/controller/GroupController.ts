import {Controller, Route, Get, Body, Post, Path, Delete, Tags} from "tsoa";
import {GroupService} from "../service/GroupService";
import {IGroup, IGroupKeyProps} from "../types/IGroup";


@Route("Group")
@Tags("Group")
export class GroupController extends Controller {

    private service = new GroupService();


    @Get("{userId}")
    public async get(@Path() userId: string) : Promise<IGroup> {
        return await this.service.getById(userId);
    }

    @Get()
    public async getAll() : Promise<IGroup[]> {
        return await this.service.getAll();
    }

    @Post("create")
    public async create(@Body() body: IGroupKeyProps) : Promise<IGroup> {
        return await this.service.create(body as IGroupKeyProps);
    }

    @Delete("{userId}")
    public async delete(@Path() userId: string) : Promise<boolean> {
        return await this.service.deleteById(userId);
    }
}