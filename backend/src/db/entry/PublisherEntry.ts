import {BaseEntry} from "./_BaseEntry";
import {Column, Entity, JoinColumn, OneToOne} from "typeorm";
import {IPublisher, IPublisherReferenceType} from "../../types/IPublisher";
import {UserEntry} from "./UserEntry";
import {GroupEntry} from "./GroupEntry";
import {ChannelEntry} from "./ChannelEntry";

@Entity("Publisher")
export class PublisherEntry extends BaseEntry implements IPublisher {

    @Column({
        nullable: true,
        type: "uuid",
        unique: true
    })
    @OneToOne(
        () => UserEntry,
        (reference: UserEntry) => reference.id
    )
    @JoinColumn()
    public userReference!: UserEntry;


    @Column({
        nullable: true,
        type: "uuid",
        unique: true
    })
    @OneToOne(
        () => GroupEntry,
        (reference: GroupEntry) => reference.id
    )
    @JoinColumn()
    public groupReference!: GroupEntry;


    @Column({
        nullable: true,
        type: "uuid",
        unique: true
    })
    @OneToOne(
        () => ChannelEntry,
        (reference: ChannelEntry) => reference.id
    )
    @JoinColumn()
    public channelReference!: ChannelEntry;


    @Column({
        nullable: false,
        type: "int",
        unique: false
    })
    public referenceType!: IPublisherReferenceType;
}