import {Repository} from "typeorm";
import {IBaseEntry} from "../types/IBaseEntry";

export class BaseService<
    IModel extends IBaseEntry,
> {
    relations: string[];
    repository: Repository<IModel>;

    protected constructor(repo: Repository<IModel>, relations: string[]) {
        this.repository = repo;
        this.relations = relations;
    }

    public async getById(id: string) : Promise<IModel> {
        const result = await this.repository.findOne({
            where: { id: id as any},
            relations: this.relations
        });
        if (!result) throw new Error("NOT_FOUND");
        return result;
    }

    public async getAll() : Promise<IModel[]> {
        const result = await this.repository.find();
        if(!result) throw new Error("NOT_FOUND");
        return result;
    }

    public async deleteById(id: string) : Promise<boolean> {
        const obj = await this.getById(id);
        const result = await this.repository.delete({id: obj.id as any});
        return !result.affected;
    }
}