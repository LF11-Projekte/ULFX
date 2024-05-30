import {PostCommentEntry} from "../db/entry/PostCommentEntry";
import {BaseService} from "./_BaseService";
import {appDataSource} from "../dataSource";
import {IGeneralCommentKeyProps, IGeneralComment} from "../types/IGeneralComment";
import { PostService } from "./PostService";
import { UserService } from "./UserService";
import { UserEntry } from "src/db/entry/UserEntry";
import { PostEntry } from "src/db/entry/PostEntry";

export class PostCommentService extends BaseService<PostCommentEntry> {

    private postService = new PostService();
    private userService = new UserService();


    constructor() {
        super(appDataSource.getRepository(PostCommentEntry), ["Post", "User", "Publisher"]);
    }

    public async create(postCommentProps: IGeneralCommentKeyProps) : Promise<IGeneralComment> {

        let postReference = await this.postService.getById(postCommentProps.reference.id);
        let userService = await this.userService.getById(postCommentProps.user.id);

        if(!postReference) throw Error("POST_NOT_FOUND");
        if(!userService) throw Error("USER_NOT_FOUND");

        let postComment = this.repository.create({
            creationDate: new Date(),
            updateDate: new Date(),
            reference: postReference as PostEntry,
            user: userService as UserEntry,
            text: postCommentProps.text
        });

        postComment = await this.repository.save(postComment);

        return postComment as IGeneralComment;
    }
}