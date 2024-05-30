import {UserEntry} from "../db/entry/UserEntry";
import {BaseService} from "./_BaseService";
import {appDataSource} from "../dataSource";
import {CreateIUserProps, IUser} from "../types/IUser";
import { IEntryId } from "src/types/IEntryId";

export class UserService extends BaseService<UserEntry> {
    constructor() {
        super(appDataSource.getRepository(UserEntry));
    }

    public async create(userProps: CreateIUserProps) : Promise<IUser> {
       let user = this.repository.create({
           creationDate : new Date(),
           updateDate : new Date(),
           ...userProps
       }) as IUser;

       user = await this.repository.save(user);

       return user;
    }

    public async getByIds(ids: IEntryId[]) : Promise<IUser[]> {
        let users = new Array<IUser>();

        ids.forEach(async id => {
            let user = await this.repository.findOneBy({ id: id.id });
            if(user) users.push(user);
        });

        if(!users.length) throw Error("NOT_FOUND");


        return users;
    }

}
