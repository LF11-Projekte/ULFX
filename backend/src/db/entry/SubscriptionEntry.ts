import {ISubscription} from "../../types/ISubscription";
import {BaseEntry} from "./_BaseEntry";
import {Column, Entity, JoinColumn, OneToOne} from "typeorm";
import {UserEntry} from "./UserEntry";
import {PublisherEntry} from "./PublisherEntry";



@Entity("Subscription")
export class SubscriptionEntry extends BaseEntry implements ISubscription{

    @Column({
        nullable: false,
        type: "uuid",
        unique: false,
    })
    @OneToOne(() => UserEntry, (user: UserEntry) => user.id)
    @JoinColumn()
    public user!: UserEntry;


    @Column({
        nullable: false,
        type: "uuid",
        unique: false,
    })
    @OneToOne(
        () => PublisherEntry,
        (publisher: PublisherEntry) => publisher.id
    )
    @JoinColumn()
    public publisher!: PublisherEntry;
}