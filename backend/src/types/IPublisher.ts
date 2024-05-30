import { IUser } from "./IUser";
import { IGroup } from "./IGroup";
import { IChannel } from "./IChannel";
import { IBaseEntry } from "./IBaseEntry";

export interface IPublisher extends IBaseEntry {
	referenceId: string;
	referenceType: "USER" | "GROUP" | "CHANNEL";
}

export type IPublisherProps = Pick<IPublisher, "referenceId" | "referenceType">;

export type CreateIPublisher = Pick<IPublisher, "id" | "creationDate" | "updateDate" | "referenceId" | "referenceType">;

export interface IPublisherExpanded extends IBaseEntry {
	reference: IUser | IChannel | IGroup;
	referenceType: "USER" | "GROUP" | "CHANNEL";
}
