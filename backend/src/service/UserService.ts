import { UserEntry } from "../db/entry/UserEntry";
import { BaseService } from "./_BaseService";
import { appDataSource } from "../dataSource";
import { IUserProps, IUser } from "../types/IUser";

export class UserService extends BaseService<UserEntry> {
	constructor() {
		super(appDataSource.getRepository(UserEntry));
	}

	public async create(userProps: IUserProps): Promise<IUser> {
		let user = this.repository.create({
			creationDate: new Date(),
			updateDate: new Date(),
			...userProps,
		}) as IUser;

		user = await this.repository.save(user);

		return user;
	}
}
