import { User } from "../entities/User";
import { AppDataSource } from "../data-source";

import { Get, Post, Route } from "tsoa";


const userRepository = AppDataSource.getRepository(User);


interface UserCreationResponse {
    success: boolean
    status: string
}


@Route("User")
export default class UserController {
    
    @Post("/")
    public createUser = async (user: User) : Promise<UserCreationResponse> => {
        try {
            await userRepository.save(user);
            return { success: true, status: "created" };
        }
        catch(ex: any) {
            return { success: false, status: (ex as Error).message };
        }
    }

    @Get("/{id}")
    public getUserById = async (userId: number) : Promise<User | any> => {
        try {
            const user = await userRepository.findOneBy({
                id: userId
            });

            return user;
        }
        catch(ex: any) {
            return "not found";
        }
    }
}
