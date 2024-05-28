import {IBaseEntry} from "./IBaseEntry";
import {IUser} from "./IUser";
import {IPost} from "./IPost";
import {IComment} from "./IComment";

export enum IGeneralReactionReferenceType {
    COMMENT,
    POST
}

export enum IGeneralReactionReactionType {
    LIKE,
    DISLIKE
}

export interface IGeneralReaction extends IBaseEntry {
    user: IUser;
    reference: IComment | IPost;
    referenceType: IGeneralReactionReferenceType;
    reactionType: IGeneralReactionReactionType;
}


export type CreateIGeneralReactionProps = Pick<IGeneralReaction
    , "user"
    | "reference"
    | "referenceType"
    | "reactionType"
>;

export type CreateIGeneralReaction = Pick<IGeneralReaction
    , "id"
    | "user"
    | "reference"
    | "referenceType"
    | "reactionType"
    | "creationDate"
    | "updateDate"
>;