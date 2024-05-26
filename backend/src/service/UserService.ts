import {UserEntry} from "../db/entry/UserEntry";
import {BaseService} from "./_BaseService";
import {appDataSource} from "../dataSource";

export class UserService extends BaseService<UserEntry> {
    constructor() {
        super(appDataSource.getRepository(UserEntry));
    }

}
