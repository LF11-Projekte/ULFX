import {Controller, Route, Get, Body, Post, Path, Delete, Tags} from "tsoa";
import {ISubscription, ISubscriptionKeyProps} from "../types/ISubscription";
import {SubscriptionService} from "../service/SubscriptionService";


@Route("Subscription")
@Tags("Subscriptions")
export class SubscriptionController extends Controller {

    private service = new SubscriptionService();
    

    @Get("{subscriptionId}")
    public async get(@Path() subscriptionId: string) : Promise<ISubscription> {
        return await this.service.getById(subscriptionId);
    }

    @Get()
    public async getAll() : Promise<ISubscription[]> {
        return await this.service.getAll();
    }

    @Post("create")
    public async create(@Body() body: ISubscriptionKeyProps) : Promise<ISubscription> {
        return await this.service.create(body);
    }

    @Delete("{subscriptionId}")
    public async delete(@Path() subscriptionId: string) : Promise<boolean> {
        return await this.service.deleteById(subscriptionId);
    }
}