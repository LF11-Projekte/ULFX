import {GroupEntry} from "../db/entry/GroupEntry";
import {BaseService} from "./_BaseService";
import {appDataSource} from "../dataSource";
import {CreateIGroupProps, IGroup} from "../types/IGroup";

export class GroupService extends BaseService<GroupEntry> {
    constructor() {
        super(appDataSource.getRepository(GroupEntry));
    }

    public async create(groupProps: CreateIGroupProps) : Promise<IGroup> {
       let group = this.repository.create({
           creationDate : new Date(),
           updateDate : new Date(),
           ...groupProps
       }) as IGroup;

       group = await this.repository.save(group);

       return group;
    }

}
