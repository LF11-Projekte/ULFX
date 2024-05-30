import { IBaseEntry } from "./IBaseEntry";
import { IUser } from "./IUser";

export interface IChannel extends IBaseEntry {
	name: string;
	creatorIds: string[];
	description: string;
}

export type CreateIChannelProps = Pick<IChannel, "name" | "creatorIds" | "description">;

export type CreateIChannel = Pick<
	IChannel,
	"id" | "name" | "creatorIds" | "description" | "creationDate" | "updateDate"
>;

export interface IChannelExpanded extends IBaseEntry {
	name: string;
	creators: IUser[];
	description: string;
}
