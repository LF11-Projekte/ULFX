import { IBaseEntry } from "./IBaseEntry";

export interface IUser extends IBaseEntry {
	email: string;
	username: string;
	description: string;
}

export type IUserProps = Pick<IUser, "email" | "username" | "description">;

export type CreateIUser = Pick<IUser, "id" | "email" | "username" | "description" | "creationDate" | "updateDate">;
