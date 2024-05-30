import {GroupEntry} from "../db/entry/GroupEntry";
import {BaseService} from "./_BaseService";
import {appDataSource} from "../dataSource";
import {IGroup, IGroupKeyProps} from "../types/IGroup";

export class GroupService extends BaseService<GroupEntry> {
    constructor() {
        super(appDataSource.getRepository(GroupEntry), ["User"]);
    }

    public async create(groupProps: IGroupKeyProps) : Promise<IGroup> {
       let group = this.repository.create({
           creationDate : new Date(),
           updateDate : new Date(),
           ...groupProps
       }) as IGroup;

       group = await this.repository.save(group);

       return group;
    }

}
