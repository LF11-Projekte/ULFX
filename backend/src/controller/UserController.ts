import {Controller, Route, Get, Body, Post, Path} from "tsoa";
import {CreateIUserProps, IUser} from "../types/IUser";
import {UserService} from "../service/UserService";


@Route("User")
export class UserController extends Controller {

    @Get("getById/{userId}")
    public async getUser(@Path() userId: string): Promise<IUser> {
        return await new UserService().getById(userId);
    }

    @Post("create")
    public async create(@Body() body: CreateIUserProps): Promise<IUser> {
        return await new UserService().create(body as CreateIUserProps);
    }
}