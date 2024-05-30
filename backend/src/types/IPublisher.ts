import {IUser} from "./IUser";
import {IGroup} from "./IGroup";
import {IChannel} from "./IChannel";
import { IEntryId } from "./IEntryId";
import { IBaseEntry } from "./IBaseEntry";

export enum IPublisherReferenceType {
    USER,
    GROUP,
    CHANNEL
}

export interface IPublisher extends IBaseEntry {
    userReference: IUser;
    groupReference: IGroup;
    channelReference: IChannel;
    referenceType: IPublisherReferenceType;
}

export type CreateIPublisherProps = Pick<IPublisher
    , "userReference"
    | "groupReference"
    | "channelReference"
    | "referenceType"
>;

export type CreateIPublisher= Pick<IPublisher
    , "id"
    | "creationDate"
    | "updateDate"
    | "userReference"
    | "groupReference"
    | "channelReference"
    | "referenceType"
>;


export interface IPublisherKey extends IBaseEntry {
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