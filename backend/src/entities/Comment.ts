import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Post } from "./Post";

export enum CommentReferenceType {
    COMMENT,
    POST
}

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(() => User, (user) => user.id)
    @JoinColumn()
    user: User

    @Column()
    reference_type: CommentReferenceType

    @OneToMany(() => Object, (obj: Comment | Post) => obj.id)
    reference: Comment | Post

    @Column()
    comment: string

    @Column()
    text: string
}
