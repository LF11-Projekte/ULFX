import {ISubscription} from "../../types/ISubscription";
import {BaseEntry} from "./_BaseEntry";
import {Column, Entity, JoinColumn, OneToMany} from "typeorm";
import {UserEntry} from "./UserEntry";
import {PublisherEntry} from "./PublisherEntry";



@Entity("Subscription")
export class SubscriptionEntry extends BaseEntry implements ISubscription{

    @Column({
        nullable: false,
        type: "uuid",
        unique: false,
    })
    @OneToMany(() => UserEntry, (user: UserEntry) => user.id)
    @JoinColumn()
    public user!: UserEntry;


    @Column({
        nullable: false,
        type: "uuid",
        unique: false,
    })
    @OneToMany(
        () => PublisherEntry,
        (publisher: PublisherEntry) => publisher.id
    )
    @JoinColumn()
    public publisher!: PublisherEntry;
}