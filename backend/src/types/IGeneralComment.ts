import {IBaseEntry} from "./IBaseEntry";
import {IUser} from "./IUser";
import {IPost} from "./IPost";


export interface IGeneralComment extends IBaseEntry {
    user: IUser;
    reference: IGeneralComment | IPost;
    text: string;
}


export type CreateICommentProps = Pick<IGeneralComment
    , "user"
    | "reference"
    | "text"
>;

export type CreateIComment = Pick<IGeneralComment
    , "id"
    | "user"
    | "reference"
    | "text"
    | "creationDate"
    | "updateDate"
>;