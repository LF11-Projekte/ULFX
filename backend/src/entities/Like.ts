import { Entity, JoinColumn, OneToMany } from "typeorm";
import { User } from "./User";
import { Post } from "./Post";

@Entity()
export class Like {
    @OneToMany(() => User, (user) => user.id)
    @JoinColumn()
    user: User
    
    @OneToMany(() => Post, (post) => post.id)
    @JoinColumn()
    post: Post
}
