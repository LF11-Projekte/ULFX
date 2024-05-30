import { IBaseEntry } from "./IBaseEntry";
import { IUser } from "./IUser";

export interface IGroup extends IBaseEntry {
	name: string;
	adminIds: string[];
	memberIds: string[];
}

export type IGroupProps = Pick<IGroup, "name" | "adminIds" | "memberIds">;

export type CreateIGroup = Pick<IGroup, "id" | "name" | "adminIds" | "memberIds" | "creationDate" | "updateDate">;

export interface IGroupExpanded extends IBaseEntry {
	name: string;
	admins: IUser[];
	members: IUser[];
}
