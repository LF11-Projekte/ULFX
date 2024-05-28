import {BaseEntry} from "./_BaseEntry";
import {Column, Entity, JoinTable, ManyToMany} from "typeorm";
import {IChannel} from "../../types/IChannel";
import {UserEntry} from "./UserEntry";

@Entity("Channel")
export class ChannelEntry extends BaseEntry implements IChannel {


    @Column({
        nullable: false,
        type: "text",
        unique: false
    })
    public name!: string;


    @Column({
        nullable: false,
        type: "uuid",
        unique: false
    })
    @ManyToMany(
        () => UserEntry,
        (user: UserEntry) => user.id
    )
    @JoinTable()
    public creators!: UserEntry[];


    @Column({
        nullable: true,
        type: "text",
        unique: false
    })
    public description!: string;
}