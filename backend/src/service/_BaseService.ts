import {Repository} from "typeorm";
import {IBaseEntry} from "../types/IBaseEntry";

export class BaseService<
    IModel extends IBaseEntry,
> {
    repository: Repository<IModel>;

    protected constructor(repo : Repository<IModel>) {
        this.repository = repo;
    }

    public async getById(id: string): Promise<IModel> {
        const result = await this.repository.findOneBy({id: id as any});
        if (!result) throw new Error("NOT_FOUND");
        return result;
    }

    public async deleteById(id: string): Promise<string> {
        const result = await this.getById(id);
        await this.repository.delete({id: result.id as any});
        return id;
    }
}