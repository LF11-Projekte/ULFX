import {BaseEntry} from "./_BaseEntry";
import {Column, Entity, JoinColumn, ManyToMany, ManyToOne} from "typeorm";
import {IPost} from "../../types/IPost";
import {PublisherEntry} from "./PublisherEntry";
import {UserEntry} from "./UserEntry";

@Entity("Post")
export class PostEntry extends BaseEntry implements IPost {

    @Column({
        nullable: false,
        type: "text",
        unique: false
    })
    public title!: string;


    @Column({
        nullable: false,
        type: "uuid",
        unique: false
    })
    @ManyToOne(
        () => PublisherEntry,
        (publisher: PublisherEntry) => publisher.id
    )
    @JoinColumn()
    public publisher!: PublisherEntry;


    @Column({
        nullable: false,
        type: "uuid",
        unique: false
    })
    @ManyToOne(
        () => UserEntry,
        (user: UserEntry) => user.id
    )
    @JoinColumn()
    public creator!: UserEntry;


    @Column({
        nullable: false,
        type: "uuid",
        unique: false
    })
    @ManyToMany(
        () => UserEntry,
        (user: UserEntry) => user.id
    )
    @JoinColumn()
    public editors!: UserEntry[];


    @Column({
        nullable: false,
        type: "text",
        unique: false
    })
    public text!: string;


    @Column({
        nullable: false,
        type: "text",
        unique: false
    })
    public images!: string[];
}