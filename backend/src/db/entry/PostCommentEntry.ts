import {BaseEntry} from "./_BaseEntry";
import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {IGeneralComment} from "../../types/IGeneralComment";
import {PostEntry} from "./PostEntry";
import {UserEntry} from "./UserEntry";

@Entity("PostComment")
export class PostCommentEntry extends BaseEntry implements IGeneralComment {

    @Column({
        nullable: false,
        type: "uuid",
        unique: false
    })
    @ManyToOne(
        () => UserEntry,
        (user) => user.id
    )
    @JoinColumn()
    public user!: UserEntry;


    @Column({
        nullable: false,
        type: "uuid",
        unique: false
    })
    @ManyToOne(
        () => PostEntry,
        (reference: PostEntry) => reference.id
    )
    @JoinColumn()
    public reference!: PostEntry;


    @Column({
        nullable: false,
        type: "text",
        unique: false
    })
    public text!: string;
}