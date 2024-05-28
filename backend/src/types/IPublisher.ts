import {IUser} from "./IUser";
import {IGroup} from "./IGroup";
import {IChannel} from "./IChannel";

export enum IPublisherReferenceType {
    USER,
    GROUP,
    CHANNEL
}

export interface IPublisher {
    object: IUser | IGroup | IChannel;
    objectType: IPublisherReferenceType;
}


export type CreateIPublisherProps = Pick<IPublisher
    , "object"
    | "objectType"
>;

export type CreateIPublisher= Pick<IPublisher
    , "object"
    | "objectType"
>;