import { IBaseEntry } from "./IBaseEntry";
import { IUser } from "./IUser";
import { IPost } from "./IPost";

export interface IComment extends IBaseEntry {
	userId: string;
	referenceId: string;
	referenceType: "COMMENT" | "POST";
	text: string;
}

export type ICommentProps = Pick<IComment, "userId" | "referenceId" | "referenceType" | "text">;

export type CreateIComment = Pick<
	IComment,
	"id" | "userId" | "referenceId" | "referenceType" | "text" | "creationDate" | "updateDate"
>;

export interface ICommentExpanded extends IBaseEntry {
	user: IUser;
	reference: IComment | IPost;
	referenceType: "COMMENT" | "POST";
	text: string;
}
