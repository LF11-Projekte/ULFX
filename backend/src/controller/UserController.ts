import {Controller, Route, Get, Request} from "tsoa";
import {IUser} from "../types/IUser";
import {UserService} from "../service/UserService";

@Route("User")
export class UserController extends Controller {

    @Get()
    public async getUser(@Request() req: {id: number}): Promise<IUser> {
        return await new UserService().getById(req.id);
    }
}