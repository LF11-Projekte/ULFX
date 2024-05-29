import {IBaseEntry} from "./IBaseEntry";
import {IUser} from "./IUser";
import {IPublisher} from "./IPublisher";
import { IEntryId } from "./IEntryId";

export interface ISubscription extends IBaseEntry {
    user: IUser;
    publisher: IPublisher;
}

export type CreateISubscriptionProps = Pick<ISubscription
    , "user"
    | "publisher"
>;

export type CreateISubscription = Pick<ISubscription
    , "id"
    | "user"
    | "publisher"
    | "creationDate"
    | "updateDate"
>;


export interface ISubscriptionKey extends IBaseEntry {
    user: IEntryId;
    publisher: IEntryId;
}

export type ISubscriptionKeyProps = Pick<ISubscriptionKey
    , "user"
    | "publisher"
>;
