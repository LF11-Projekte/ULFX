import { BaseEntry } from "./_BaseEntry";
import { Column, Entity } from "typeorm";
import { IPost } from "../../types/IPost";

@Entity("Post")
export class PostEntry extends BaseEntry implements IPost {
	@Column({
		nullable: false,
		type: "text",
		unique: false,
	})
	public title!: string;

	@Column({
		nullable: false,
		type: "uuid",
		unique: false,
	})
	public publisherId!: string;

	@Column({
		nullable: false,
		type: "uuid",
		unique: false,
	})
	public creatorId!: string;

	@Column({
		nullable: false,
		type: "uuid",
		unique: false,
	})
	public editorIds!: string[];

	@Column({
		nullable: false,
		type: "text",
		unique: false,
	})
	public text!: string;

	@Column({
		nullable: false,
		type: "text",
		unique: false,
	})
	public images!: string[];
}
