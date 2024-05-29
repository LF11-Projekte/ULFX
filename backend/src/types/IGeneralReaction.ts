import {IBaseEntry} from "./IBaseEntry";
import {IUser} from "./IUser";
import {IPost} from "./IPost";
import {IGeneralComment} from "./IGeneralComment";
import { IEntryId } from "./IEntryId";

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


export interface IGeneralReactionKey extends IBaseEntry {
    user: IEntryId;
    reference: IEntryId;
    reactionType: IGeneralReactionReactionType;
}

export type IGeneralReactionKeyProps = Pick<IGeneralReactionKey
    , "user"
    | "reference"
    | "reactionType"
>;