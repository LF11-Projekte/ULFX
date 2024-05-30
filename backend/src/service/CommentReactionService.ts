import {CommentReactionEntry} from "../db/entry/CommentReactionEntry";
import {BaseService} from "./_BaseService";
import {appDataSource} from "../dataSource";
import {IGeneralReaction, IGeneralReactionKeyProps, IGeneralReactionReactionType} from "../types/IGeneralReaction";
import {UserService} from "./UserService";
import {UserEntry} from "../db/entry/UserEntry";
import {PostService} from "./PostService";
import {IEntryId} from "../types/IEntryId";
import {PostEntry} from "../db/entry/PostEntry";

export class CommentReactionService extends BaseService<CommentReactionEntry> {

    private userService = new UserService();
    private postCommentService = new PostService();


    constructor() {
        super(appDataSource.getRepository(CommentReactionEntry), ["User", "Comment"]);
    }

    public async create(reactionProps: IGeneralReactionKeyProps) : Promise<IGeneralReaction> {

        let user = await this.userService.getById(reactionProps.user.id);
        let reference = await this.postCommentService.getById(reactionProps.reference.id);


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

    public async getReactionCountsOf(commentId: string) : Promise<[number, number]> {

        const comment = await this.postCommentService.getById(commentId);


        const likeCount = await this.repository.count({
            where: { reference: comment, reactionType: IGeneralReactionReactionType.LIKE }
        });

        const dislikeCount = await this.repository.count({
            where: { reference: comment, reactionType: IGeneralReactionReactionType.DISLIKE }
        });


        return [likeCount, dislikeCount];
    }
}
