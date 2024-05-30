import { Controller, Route, Get, Body, Post, Path, Delete, Tags } from "tsoa";
import { IUserProps, IUser } from "../types/IUser";
import { UserService } from "../service/UserService";

@Route("User")
@Tags("User")
export class UserController extends Controller {
	private service = new UserService();

	@Get("{userId}")
	public async get(@Path() userId: string): Promise<IUser | "NOT_FOUND"> {
		return await this.service.getById(userId);
	}

	@Get()
	public async getAll(): Promise<IUser[] | "NOT_FOUND"> {
		return await this.service.getAll();
	}

	@Post("create")
	public async create(@Body() body: IUserProps): Promise<IUser> {
		return await this.service.create(body as IUserProps);
	}

	@Delete("{userId}")
	public async delete(@Path() userId: string): Promise<boolean> {
		return await this.service.deleteById(userId);
	}
}
