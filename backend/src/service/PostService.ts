import {PostEntry} from "../db/entry/PostEntry";
import {BaseService} from "./_BaseService";
import {appDataSource} from "../dataSource";
import {IPostKeyProps, IPost} from "../types/IPost";
import {UserService} from "./UserService";
import {PublisherService} from "./PublisherService";
import { IUser } from "src/types/IUser";
import { IPublisher } from "src/types/IPublisher";

export class PostService extends BaseService<PostEntry> {

    private userService = new UserService();
    private publisherService = new PublisherService();


    constructor() {
        super(appDataSource.getRepository(PostEntry));
    }

    public async create(postProps: IPostKeyProps) : Promise<IPost> {

        let editors = this.userService.getByIds(postProps.editors);
        let creator = this.userService.getById(postProps.creator.id);
        let publisher = this.publisherService.getById(postProps.publisher.id);

       let post = this.repository.create({
           creationDate : new Date(),
           updateDate : new Date(),
           editors: editors as IUser[],
           creator: creator as IUser,
           publisher: publisher as IPublisher,
           ...postProps
       } as IPost) as IPost;

       post = await this.repository.save(post);

       return post;
    }

}
