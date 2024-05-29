import {IBaseEntry} from "./IBaseEntry";
import { IEntryId } from "./IEntryId";
import {IUser} from "./IUser";

export interface IChannel extends IBaseEntry {
    name: string;
    creators: IUser[];
    description: string;
}

export type CreateIChannelProps = Pick<IChannel
    , "name"
    | "creators"
    | "description"
>;

export type CreateIChannel = Pick<IChannel
    , "id"
    | "name"
    | "creators"
    | "description"
    | "creationDate"
    | "updateDate"
>;


export interface IChannelKey extends IBaseEntry {
    name: string;
    creators: IEntryId[];
    description: string;
}

export type IChannelKeyProps = Pick<IChannelKey
    , "name"
    | "creators"
    | "description"
>;