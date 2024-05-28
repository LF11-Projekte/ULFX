import {IUser} from "./IUser";
import {IGroup} from "./IGroup";
import {IChannel} from "./IChannel";

export enum IPublisherReferenceType {
    USER,
    GROUP,
    CHANNEL
}

export interface IPublisher {
    userReference: IUser | null;
    groupReference: IGroup | null;
    channelReference: IChannel | null;
    referenceType: IPublisherReferenceType;
}


export type CreateIPublisherProps = Pick<IPublisher
    , "userReference"
    | "groupReference"
    | "channelReference"
    | "referenceType"
>;

export type CreateIPublisher= Pick<IPublisher
    , "userReference"
    | "groupReference"
    | "channelReference"
    | "referenceType"
>;