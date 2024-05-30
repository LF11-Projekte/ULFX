import { BaseEntry } from "./_BaseEntry";
import { Column, Entity } from "typeorm";
import { IReaction } from "../../types/IReaction";

@Entity("Reaction")
export class ReactionEntry extends BaseEntry implements IReaction {
	@Column({
		nullable: false,
		type: "uuid",
		unique: true,
	})
	public userId!: string;

	@Column({
		nullable: true,
		type: "uuid",
		unique: true,
	})
	public referenceId!: string;

	@Column({
		nullable: false,
		type: "text",
		unique: false,
	})
	public referenceType!: "COMMENT" | "POST";

	@Column({
		nullable: false,
		type: "text",
		unique: false,
	})
	public reactionType!: "LIKE" | "DISLIKE";

}
