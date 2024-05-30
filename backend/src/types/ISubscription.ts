import { IBaseEntry } from "./IBaseEntry";
import { IUser } from "./IUser";
import { IPublisher } from "./IPublisher";

export interface ISubscription extends IBaseEntry {
	userId: string;
	publisherId: string;
}
export type ISubscriptionProps = Pick<ISubscription, "userId" | "publisherId">;

export type CreateISubscription = Pick<ISubscription, "id" | "userId" | "publisherId" | "creationDate" | "updateDate">;

export interface ISubscriptionExpanded extends IBaseEntry {
	userId: IUser;
	publisherId: IPublisher;
}
