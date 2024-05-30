import { BaseEntry } from "./_BaseEntry";
import { Column, Entity } from "typeorm";
import { IGroup } from "../../types/IGroup";

@Entity("Group")
export class GroupEntry extends BaseEntry implements IGroup {
	@Column({
		nullable: false,
		type: "text",
		unique: true,
	})
	public name!: string;

	@Column({
		nullable: false,
		type: "uuid",
		unique: true,
	})
	public adminIds!: string[];

	@Column({
		nullable: false,
		type: "uuid",
		unique: true,
	})
	public memberIds!: string[];
}
