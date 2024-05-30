import { ISubscription } from "../../types/ISubscription";
import { BaseEntry } from "./_BaseEntry";
import { Column, Entity } from "typeorm";

@Entity("Subscription")
export class SubscriptionEntry extends BaseEntry implements ISubscription {
	@Column({
		nullable: false,
		type: "uuid",
		unique: false,
	})
	public userId!: string;

	@Column({
		nullable: false,
		type: "uuid",
		unique: false,
	})
	public publisherId!: string;
}
