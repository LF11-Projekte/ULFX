import {BaseEntry} from "./_BaseEntry";
import {IUser} from "../../types/IUser";
import {Column, Entity} from "typeorm";

@Entity("User")
export class UserEntry extends BaseEntry implements IUser {

    @Column({
        nullable: false,
        type: "text",
        unique: true,
    })
    public email!: string;

    @Column({
        nullable: false,
        type: "text"
    })
    public username!: string;

    @Column({
        nullable: true,
        type: "text"
    })
    public description!: string;

}