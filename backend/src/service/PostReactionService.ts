import {PostReactionEntry} from "../db/entry/PostReactionEntry";
import {BaseService} from "./_BaseService";
import {appDataSource} from "../dataSource";
import {IGeneralReaction, IGeneralReactionKeyProps, IGeneralReactionReactionType} from "../types/IGeneralReaction";
import {UserService} from "./UserService";
import {PostService} from "./PostService";
import {UserEntry} from "../db/entry/UserEntry";
import {PostEntry} from "../db/entry/PostEntry";
import {IEntryId} from "../types/IEntryId";

export class PostReactionService extends BaseService<PostReactionEntry> {

    private userService = new UserService();
    private postService = new PostService();


    constructor() {
        super(appDataSource.getRepository(PostReactionEntry), ["Post", "User", "Publisher"]);
    }

    public async create(reactionProps: IGeneralReactionKeyProps) : Promise<IGeneralReaction> {

        let user = await this.userService.getById(reactionProps.user.id);
        let reference = await this.postService.getById(reactionProps.reference.id);


        let reaction = this.repository.create({
            creationDate: new Date(),
            updateDate: new Date(),
            user: user as UserEntry,
            reference: reference as PostEntry,
            reactionType: reactionProps.reactionType
        });

        reaction = await this.repository.save(reaction);

        return reaction;
    }


    public async getByIds(ids: IEntryId[]) : Promise<IGeneralReaction[]> {
        let reactions = new Array<IGeneralReaction>();

        for (const id of ids) {
            let reaction = await this.repository.findOneBy({ id: id.id });
            if(reaction) reactions.push(reaction);
        }

        if(!reactions.length) throw Error("NOT_FOUND");


        return reactions;
    }

    public async getReactionCountsOf(postId: string) : Promise<[number, number]> {

        const post = await this.postService.getById(postId);


        const likeCount = await this.repository.count({
            where: { reference: post, reactionType: IGeneralReactionReactionType.LIKE }
        });

        const dislikeCount = await this.repository.count({
            where: { reference: post, reactionType: IGeneralReactionReactionType.DISLIKE }
        });


        return [likeCount, dislikeCount];
    }

}
