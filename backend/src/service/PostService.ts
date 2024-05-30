import {PostEntry} from "../db/entry/PostEntry";
import {BaseService} from "./_BaseService";
import {appDataSource} from "../dataSource";
import {IPostKeyProps, IPost} from "../types/IPost";
import {UserService} from "./UserService";
import {PublisherService} from "./PublisherService";

export class PostService extends BaseService<PostEntry> {

    private userService = new UserService();
    private publisherService = new PublisherService();


    constructor() {
        super(appDataSource.getRepository(PostEntry), ["User", "Publisher", "Group", "Channel"]);
    }

    public async create(postProps: IPostKeyProps) : Promise<IPost> {

        let editors = await this.userService.getByIds(postProps.editors);
        let creator = await this.userService.getById(postProps.creator.id);
        let publisher = await this.publisherService.getById(postProps.publisher.id);

        console.log(publisher);


       let post = this.repository.create({
           creationDate: new Date(),
           updateDate: new Date(),
           editors: editors,
           creator: creator,
           publisher: publisher,
           title: postProps.title,
           images: postProps.images,
           text: postProps.text
       });

       post = await this.repository.save(post);

       return post;
    }

}
