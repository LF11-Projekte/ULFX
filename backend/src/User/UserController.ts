import { Body, Controller, Get, Path, Post, Route, SuccessResponse } from "tsoa";
import { UserService } from "./UserService";
import { UserEntity } from "./UserEntity";


@Route("user")
export class UserController extends Controller {

    @Get("{userId}")
    public async getUserById(@Path() userId: number) : Promise<UserEntity> {
        return new UserService().get(userId);
    }

    @SuccessResponse("201", "Created")
    @Post()
    public async createUser(@Body() reqBody) : Promise<void> { 
        this.setStatus(201);
        new UserService().create(reqBody);
        return;
    }
}