import {IUser} from "./IUser";
import {IGroup} from "./IGroup";
import {IChannel} from "./IChannel";
import { IEntryId } from "./IEntryId";

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


export interface IPublisherKey {
    userReference: IEntryId | null;
    groupReference: IEntryId | null;
    channelReference: IEntryId | null;
    referenceType: IPublisherReferenceType;
}

export type IPublisherKeyProps = Pick<IPublisherKey
    , "userReference"
    | "groupReference"
    | "channelReference"
    | "referenceType"
>;