import {SubscriptionEntry} from "../db/entry/SubscriptionEntry";
import {BaseService} from "./_BaseService";
import {appDataSource} from "../dataSource";
import {ISubscriptionKeyProps, ISubscription} from "../types/ISubscription";
import {UserService} from "./UserService";
import {PublisherService} from "./PublisherService";

export class SubscriptionService extends BaseService<SubscriptionEntry> {

    private userService = new UserService();
    private publisherService = new PublisherService();


    constructor() {
        super(appDataSource.getRepository(SubscriptionEntry), ["User", "Publisher"]);
    }
    

    public async create(subscriptionProps: ISubscriptionKeyProps) : Promise<ISubscription> {
        
        let user = await this.userService.getById(subscriptionProps.user.id);
        let publisher = await this.publisherService.getById(subscriptionProps.publisher.id);

        if(!user) throw Error("USER_NOT_FOUND");
        if(!publisher) throw Error("PUBLISHER_NOT_FOUND");

        
        let subscription = this.repository.create({
            creationDate: new Date(),
            updateDate: new Date(),
            publisher: publisher,
            user: user
        }) as SubscriptionEntry;

        subscription = await this.repository.save(subscription);

        return subscription as ISubscription;
    }

}
