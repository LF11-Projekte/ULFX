import {IBaseEntry} from "./IBaseEntry";
import {IUser} from "./IUser";
import {IPost} from "./IPost";
import {IGeneralComment} from "./IGeneralComment";

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
    reference: IGeneralComment | IPost;
    reactionType: IGeneralReactionReactionType;
}


export type CreateIGeneralReactionProps = Pick<IGeneralReaction
    , "user"
    | "reference"
    | "reactionType"
>;

export type CreateIGeneralReaction = Pick<IGeneralReaction
    , "id"
    | "user"
    | "reference"
    | "reactionType"
    | "creationDate"
    | "updateDate"
>;