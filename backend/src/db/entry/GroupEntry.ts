import {BaseEntry} from "./_BaseEntry";
import {Column, Entity, JoinColumn, ManyToMany} from "typeorm";
import {IGroup} from "../../types/IGroup";
import {UserEntry} from "./UserEntry";

@Entity("Group")
export class GroupEntry extends BaseEntry implements IGroup {

    @Column({
        nullable: false,
        type: "text",
        unique: true
    })
    public name!: string;


    @Column({
        nullable: false,
        type: "uuid",
        unique: true
    })
    @ManyToMany(
        () => UserEntry,
        (user: UserEntry) => user.id
    )
    @JoinColumn()
    public admins!: UserEntry[];


    @Column({
        nullable: false,
        type: "uuid",
        unique: true
    })
    @ManyToMany(
        () => UserEntry,
        (user: UserEntry) => user.id
    )
    @JoinColumn()
    public members!: UserEntry[];

}