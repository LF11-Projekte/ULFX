import {Controller, Route, Get, Body, Post, Path} from "tsoa";
import {CreateIUserProps, IUser} from "../types/IUser";
import {UserService} from "../service/UserService";


@Route("User")
export class UserController extends Controller {

    private service = new UserService();
    

    @Get("{userId}")
    public async get(@Path() userId: string) : Promise<IUser> {
        return await this.service.getById(userId);
    }

    @Get()
    public async getAll() : Promise<IUser[]> {
        return await this.service.getAll();
    }

    @Post("create")
    public async create(@Body() body: CreateIUserProps) : Promise<IUser> {
        return await this.service.create(body as CreateIUserProps);
    }
}