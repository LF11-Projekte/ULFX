import {SubscriptionEntry} from "../db/entry/SubscriptionEntry";
import {BaseService} from "./_BaseService";
import {appDataSource} from "../dataSource";
import {ISubscriptionKeyProps, ISubscription} from "../types/ISubscription";

export class SubscriptionService extends BaseService<SubscriptionEntry> {
    constructor() {
        super(appDataSource.getRepository(SubscriptionEntry));
    }

    public async create(subscriptionProps: ISubscriptionKeyProps) : Promise<ISubscription> {
       let subscription = await this.repository.save({
            creationDate: new Date(),
            updateDate: new Date(),
            publisher: { id: subscriptionProps.publisher.id },
            user: {id: subscriptionProps.user.id }
       }) as ISubscription;

       return subscription;
    }

}
