import {Column, PrimaryGeneratedColumn} from "typeorm";
import {IBaseEntry} from "../../types/IBaseEntry";

export class BaseEntry implements IBaseEntry {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column("timestamp")
    public creationDate!: Date;

    @Column("timestamp")
    public updateDate!: Date;
}