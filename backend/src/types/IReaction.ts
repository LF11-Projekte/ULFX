import { IBaseEntry } from "./IBaseEntry";
import { IUser } from "./IUser";
import { IPost } from "./IPost";
import { IComment } from "./IComment";

export interface IReaction extends IBaseEntry {
	userId: string;
	referenceId: string;
	referenceType: "COMMENT" | "POST";
	reactionType: "LIKE" | "DISLIKE";
}

export type IReactionProps = Pick<IReaction, "userId" | "referenceId" | "referenceType" | "reactionType">;

export type CreateIReaction = Pick<
	IReaction,
	"id" | "userId" | "referenceId" | "referenceType" | "reactionType" | "creationDate" | "updateDate"
>;

export interface IReactionExpanded extends IBaseEntry {
	user: IUser;
	reference: IPost | IComment;
	referenceType: "COMMENT" | "POST";
	reactionType: "LIKE" | "DISLIKE";
}
