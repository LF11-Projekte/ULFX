import { SubscriptionEntry } from "../db/entry/SubscriptionEntry";
import { BaseService } from "./_BaseService";
import { appDataSource } from "../dataSource";
import { ISubscription, ISubscriptionProps } from "../types/ISubscription";
import { UserService } from "./UserService";
import { PublisherService } from "./PublisherService";

export class SubscriptionService extends BaseService<SubscriptionEntry> {
	private userService = new UserService();
	private publisherService = new PublisherService();

	constructor() {
		super(appDataSource.getRepository(SubscriptionEntry));
	}

	public async create(subscriptionProps: ISubscriptionProps): Promise<ISubscription> {
		const user = await this.userService.getById(subscriptionProps.userId);
		const publisher = await this.publisherService.getById(subscriptionProps.publisherId);

		if (!user) throw Error("USER_NOT_FOUND");
		if (!publisher) throw Error("PUBLISHER_NOT_FOUND");

		let subscription = this.repository.create({
			creationDate: new Date(),
			updateDate: new Date(),
			...subscriptionProps,
		});

		subscription = await this.repository.save(subscription);

		return subscription as ISubscription;
	}
}
