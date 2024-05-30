import { Controller, Route, Get, Body, Post, Path, Delete, Tags } from "tsoa";
import { IPublisherProps, IPublisher } from "../types/IPublisher";
import { PublisherService } from "../service/PublisherService";

@Route("Publisher")
@Tags("Publisher")
export class PublisherController extends Controller {
	private service = new PublisherService();

	@Get("{publisherId}")
	public async get(@Path() publisherId: string): Promise<IPublisher | "NOT_FOUND"> {
		return await this.service.getById(publisherId);
	}

	@Get()
	public async getAll(): Promise<IPublisher[] | "NOT_FOUND"> {
		return await this.service.getAll();
	}

	@Post("create")
	public async create(@Body() body: IPublisherProps): Promise<IPublisher> {
		return await this.service.create(body as IPublisherProps);
	}

	@Delete("{publisherId}")
	public async delete(@Path() publisherId: string): Promise<boolean> {
		return await this.service.deleteById(publisherId);
	}
}
