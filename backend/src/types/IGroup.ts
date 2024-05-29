import {IBaseEntry} from "./IBaseEntry";
import {IUser} from "./IUser";
import {IEntryId} from "./IEntryId"

export interface IGroup extends IBaseEntry {
    name: string;
    admins: IUser[];
    members: IUser[];
}

export type CreateIGroupProps = Pick<IGroup
    , "name"
    | "admins"
    | "members"
>;

export type CreateIGroup = Pick<IGroup
    , "id"
    | "name"
    | "admins"
    | "members"
    | "creationDate"
    | "updateDate"
>;


export interface IGroupKey extends IBaseEntry {
    name: string;
    admins: IEntryId[];
    members: IEntryId[];
}

export type IGroupKeyProps = Pick<IGroupKey
    , "name"
    | "admins"
    | "members"
>;
