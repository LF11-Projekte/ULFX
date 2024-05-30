import { BaseEntry } from "./_BaseEntry";
import { Column, Entity } from "typeorm";
import { IChannel } from "../../types/IChannel";

@Entity("Channel")
export class ChannelEntry extends BaseEntry implements IChannel {
	@Column({
		nullable: false,
		type: "text",
		unique: false,
	})
	public name!: string;

	@Column({
		nullable: false,
		type: "uuid",
		unique: false,
	})
	public creatorIds!: string[];

	@Column({
		nullable: true,
		type: "text",
		unique: false,
	})
	public description!: string;
}
