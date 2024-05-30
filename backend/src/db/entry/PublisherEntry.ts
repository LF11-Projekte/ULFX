import {BaseEntry} from "./_BaseEntry";
import {Column, Entity, JoinColumn} from "typeorm";
import {IPublisher, IPublisherReferenceType} from "../../types/IPublisher";
import {UserEntry} from "./UserEntry";
import {GroupEntry} from "./GroupEntry";
import {ChannelEntry} from "./ChannelEntry";

@Entity("Publisher")
export class PublisherEntry extends BaseEntry implements IPublisher {

    @Column({
        nullable: true,
        type: "uuid",
    })
    @JoinColumn()
    public userReference!: UserEntry;


    @Column({
        nullable: true,
        type: "uuid",
    })
    @JoinColumn()
    public groupReference!: GroupEntry;


    @Column({
        nullable: true,
        type: "uuid",
    })
    @JoinColumn()
    public channelReference!: ChannelEntry;


    @Column({
        nullable: false,
        type: "int",
    })
    public referenceType!: IPublisherReferenceType;
}