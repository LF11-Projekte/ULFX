import {IBaseEntry} from "./IBaseEntry";
import {IUser} from "./IUser";

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