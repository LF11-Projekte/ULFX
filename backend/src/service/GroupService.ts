import { GroupEntry } from "../db/entry/GroupEntry";
import { BaseService } from "./_BaseService";
import { appDataSource } from "../dataSource";
import { IGroup, IGroupProps } from "../types/IGroup";

export class GroupService extends BaseService<GroupEntry> {
	constructor() {
		super(appDataSource.getRepository(GroupEntry));
	}

	public async create(groupProps: IGroupProps): Promise<IGroup> {
		let group = this.repository.create({
			creationDate: new Date(),
			updateDate: new Date(),
			...groupProps,
		}) as IGroup;

		group = await this.repository.save(group);

		return group;
	}
}
