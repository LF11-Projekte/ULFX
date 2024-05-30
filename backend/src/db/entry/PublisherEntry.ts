import { BaseEntry } from "./_BaseEntry";
import { Column, Entity } from "typeorm";
import { IPublisher } from "../../types/IPublisher";

@Entity("Publisher")
export class PublisherEntry extends BaseEntry implements IPublisher {
	@Column({
		nullable: true,
		type: "uuid",
	})
	public referenceId!: string;

	@Column({
		nullable: false,
		type: "text",
	})
	public referenceType!: "USER" | "GROUP" | "CHANNEL";

}
