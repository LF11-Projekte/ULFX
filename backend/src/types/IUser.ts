import {IBaseEntry} from "./IBaseEntry";

export interface IUser extends IBaseEntry {
    email: string;
    username: string;
    description: string;
}

export type ICreateUserProps = Pick<IUser, "email" | "username" | "description">;
export type ICreateUser = Pick<IUser, "id" | "email" | "username" | "description" | "creationDate" | "updateDate">;
