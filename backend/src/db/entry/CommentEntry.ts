import { BaseEntry } from "./_BaseEntry";
import { Column, Entity } from "typeorm";
import { IComment } from "../../types/IComment";

@Entity("Comment")
export class CommentEntry extends BaseEntry implements IComment {
	@Column({
		nullable: false,
		type: "uuid",
		unique: false,
	})
	public userId!: string;

	@Column({
		nullable: false,
		type: "uuid",
		unique: false,
	})
	public referenceId!: string;

	@Column({
		nullable: false,
		type: "text",
	})
	public referenceType!: "COMMENT" | "POST";

	@Column({
		nullable: false,
		type: "text",
		unique: false,
	})
	public text!: string;
}
