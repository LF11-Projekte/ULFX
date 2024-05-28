import {IBaseEntry} from "./IBaseEntry";
import {IUser} from "./IUser";
import {IPost} from "./IPost";
import {IPublisherReferenceType} from "./IPublisher";

export enum ICommentReferenceType {
    COMMENT,
    POST
}

export interface IComment extends IBaseEntry {
    user: IUser;
    reference: IComment | IPost;
    referenceType: IPublisherReferenceType;
    text: string;
}


export type CreateICommentProps = Pick<IComment
    , "user"
    | "reference"
    | "referenceType"
    | "text"
>;

export type CreateIComment = Pick<IComment
    , "id"
    | "user"
    | "reference"
    | "referenceType"
    | "text"
    | "creationDate"
    | "updateDate"
>;