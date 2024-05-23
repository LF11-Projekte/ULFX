import { UserEntity } from "./UserEntity";
import { AppDataSource } from "../data-source";

const userRepository = AppDataSource.getRepository(UserEntity);


export type UserCreationParams = Pick<UserEntity, "username" | "priveledges" | "description">;


export class UserService {

    public async get(id: number) : Promise<UserEntity> {
        return await userRepository.findOneBy({ id: id });
    }

    public async create(params: UserCreationParams) : Promise<UserEntity> {
        const response = await userRepository.save({ 
            ...params
        });

        return response;
    }

}