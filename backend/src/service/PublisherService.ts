import { BaseService } from "./_BaseService";
import { appDataSource } from "../dataSource";
import { IPublisher, IPublisherProps } from "../types/IPublisher";
import { PublisherEntry } from "../db/entry/PublisherEntry";
import { UserService } from "./UserService";
import { GroupService } from "./GroupService";
import { ChannelService } from "./ChannelService";

export class PublisherService extends BaseService<PublisherEntry> {
	private userService = new UserService();
	private groupService = new GroupService();
	private channelService = new ChannelService();

	constructor() {
		super(appDataSource.getRepository(PublisherEntry));
	}

	public async create(publisherProps: IPublisherProps): Promise<IPublisher> {
		switch (publisherProps.referenceType) {
			case "USER":
				await this.userService.checkEntryExists(publisherProps.referenceId, "User");
				break;

			case "CHANNEL":
				await this.channelService.checkEntryExists(publisherProps.referenceId, "Channel");
				break;

			case "GROUP":
				await this.groupService.checkEntryExists(publisherProps.referenceId, "Group");
				break;
		}

		let publisher = this.repository.create({
			creationDate: new Date(),
			updateDate: new Date(),
			...publisherProps,
		});

		publisher = await this.repository.save(publisher);

		return publisher as IPublisher;
	}
}
