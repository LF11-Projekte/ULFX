import { Controller, Route, Get, Body, Post, Path, Delete, Tags } from "tsoa";
import { GroupService } from "../service/GroupService";
import { IGroup, IGroupProps } from "../types/IGroup";

@Route("Group")
@Tags("Group")
export class GroupController extends Controller {
	private service = new GroupService();

	@Get("{groupId}")
	public async get(@Path() groupId: string): Promise<IGroup | "NOT_FOUND"> {
		return await this.service.getById(groupId);
	}

	@Get()
	public async getAll(): Promise<IGroup[] | "NOT_FOUND"> {
		return await this.service.getAll();
	}

	@Post("create")
	public async create(@Body() body: IGroupProps): Promise<IGroup> {
		return await this.service.create(body);
	}

	@Delete("{groupId}")
	public async delete(@Path() groupId: string): Promise<boolean> {
		return await this.service.deleteById(groupId);
	}
}
