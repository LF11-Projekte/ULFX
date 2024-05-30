import {Controller, Route, Get, Body, Post, Path} from "tsoa";
import {IPublisherKeyProps, IPublisher} from "../types/IPublisher";
import {PublisherService} from "../service/PublisherService";


@Route("Publisher")
export class PublisherController extends Controller {

    private service = new PublisherService();
    

    @Get("{publisherId}")
    public async get(@Path() publisherId: string) : Promise<IPublisher> {
        return await this.service.getById(publisherId);
    }

    @Get()
    public async getAll() : Promise<IPublisher[]> {
        return await this.service.getAll();
    }

    @Post("create")
    public async create(@Body() body: IPublisherKeyProps) : Promise<IPublisher> {
        return await this.service.create(body as IPublisherKeyProps);
    }
}