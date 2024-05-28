import {Column} from "typeorm";
import {IBaseEntry} from "../../types/IBaseEntry";

export class BaseEntry implements IBaseEntry {
    @Column({primary: true, generated: "uuid"})
    public id!: string;

    @Column("datetime")
    public creationDate!: Date;

    @Column("datetime")
    public updateDate!: Date;
}