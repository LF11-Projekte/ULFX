import {BaseEntry} from "./_BaseEntry";
import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {
    IGeneralReaction,
    IGeneralReactionReactionType,
} from "../../types/IGeneralReaction";
import {UserEntry} from "./UserEntry";
import {PostEntry} from "./PostEntry";

@Entity("PostReaction")
export class PostReactionEntry extends BaseEntry implements IGeneralReaction {

    @Column({
        nullable: false,
        type: "uuid",
        unique: true
    })
    @ManyToOne(
        () => UserEntry,
        (user: UserEntry) => user.id
    )
    @JoinColumn()
    public user!: UserEntry;


    @Column({
        nullable: true,
        type: "uuid",
        unique: true
    })
    @ManyToOne(
        () => PostEntry,
        (reference: PostEntry) => reference.id
    )
    @JoinColumn()
    public reference!: PostEntry;


    @Column({
        nullable: false,
        type: "int",
        unique: true
    })
    public reactionType!: IGeneralReactionReactionType;

}