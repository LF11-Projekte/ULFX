import { Repository } from "typeorm";
import { IBaseEntry } from "../types/IBaseEntry";

export class BaseService<IModel extends IBaseEntry> {
	repository: Repository<IModel>;

	protected constructor(repo: Repository<IModel>) {
		this.repository = repo;
	}

	public async checkEntryExists(id: string, entryName: string) {
		const entry = await this.getById(id);
		if (entry === "NOT_FOUND") throw Error(`NOT_FOUND (Entry with id ${id} in ${entryName})`);
	}

	public async checkEntriesExists(ids: string[], entryName: string) {
		const entry = await this.getByIds(ids);
		if (entry === "NOT_FOUND") throw Error(`NOT_FOUND (Entries with id ${ids} in ${entryName})`);
	}

	public async getById(id: string): Promise<IModel | "NOT_FOUND"> {
		const result = await this.repository.findOneBy({ id: id as any});
		return !result ? "NOT_FOUND" : result;
	}

	public async getByIds(ids: string[]): Promise<IModel[] | "NOT_FOUND"> {
		const objects = new Array<IModel>();

		for (const id of ids) {
			const obj = await this.repository.findOneBy({ id: id as any });
			if (obj) objects.push(obj);
		}

		for (const id of ids) {
			if (
				!objects.find((val) => {
					val.id == id;
				})
			)
				return "NOT_FOUND";
		}

		return objects;
	}

	public async getAll(): Promise<IModel[] | "NOT_FOUND"> {
		const result = await this.repository.find();
		return !result.length ? "NOT_FOUND" : result;
	}

	public async deleteById(id: string): Promise<boolean> {
		const obj = await this.getById(id);

		if (obj === "NOT_FOUND") {
			return false;
		}

		const result = await this.repository.delete({ id: id as any});
		return !result.affected;
	}
}
