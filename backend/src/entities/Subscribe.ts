import { Entity, JoinColumn, OneToMany } from "typeorm";
import { User } from "./User";

@Entity()
export class Subscribe {
    @OneToMany(() => User, (user) => user.id)
    @JoinColumn()
    user: User
    
    @OneToMany(() => User, (user) => user.id)
    @JoinColumn()
    followed: User
}