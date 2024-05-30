import { IBaseEntry } from "./IBaseEntry";
import { IUser } from "./IUser";
import { IPublisher } from "./IPublisher";

export interface IPost extends IBaseEntry {
	title: string; // Title of Post
	publisherId: string; // Channel or user that publishes the post
	creatorId: string; // Person who writes if publisher is IUser creator = publisher
	editorIds: string[]; // All persons who ever edited the post
	images: string[]; // Images that are been used in post
	text: string; // Actual post content. // TODO: Maybe change to file
}

export type IPostProps = Pick<IPost, "title" | "publisherId" | "creatorId" | "editorIds" | "images" | "text">;

export type CreateIPost = Pick<
	IPost,
	"id" | "title" | "publisherId" | "creatorId" | "editorIds" | "images" | "text" | "creationDate" | "updateDate"
>;

export interface IPostExpanded extends IBaseEntry {
	title: string; // Title of Post
	publisher: IPublisher; // Channel or user that publishes the post
	creator: IUser; // Person who writes if publisher is IUser creator = publisher
	editors: IUser[]; // All persons who ever edited the post
	images: string[]; // Images that are been used in post
	text: string; // Actual post content. // TODO: Maybe change to file
}
