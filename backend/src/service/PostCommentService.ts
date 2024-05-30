import {PostCommentEntry} from "../db/entry/PostCommentEntry";
import {BaseService} from "./_BaseService";
import {appDataSource} from "../dataSource";
import {IGeneralCommentKeyProps, IGeneralComment} from "../types/IGeneralComment";
import { PostService } from "./PostService";
import { IPost } from "src/types/IPost";
import { UserService } from "./UserService";
import { IUser } from "src/types/IUser";

export class PostCommentService extends BaseService<PostCommentEntry> {

    private postService = new PostService();
    private userService = new UserService();


    constructor() {
        super(appDataSource.getRepository(PostCommentEntry));
    }

    public async create(postCommentProps: IGeneralCommentKeyProps) : Promise<IGeneralComment> {

        let postReference = await this.postService.getById(postCommentProps.reference.id);
        let userService = await this.userService.getById(postCommentProps.user.id);

        if(!postReference) throw Error("POST_NOT_FOUND");
        if(!userService) throw Error("USER_NOT_FOUND");

        let postComment = this.repository.create({
            creationDate: new Date(),
            updateDate: new Date(),
            reference: postReference as IPost,
            user: userService as IUser,
            text: postCommentProps.text
        });

       postComment = await this.repository.save(postComment);

       return postComment as IGeneralComment;
    }
}