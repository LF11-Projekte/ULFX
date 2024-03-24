import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { User } from "./User"
import { Image } from  "./Image"

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.id)
    creator: User

    @Column({ type: 'timestamptz' })
    creation_time: Date

    @ManyToMany(() => User)
    @JoinTable()
    editors: User[]

    @Column({ type: 'timestamptz' })
    editing_time: Date
    
    @ManyToMany(() => Image)
    @JoinTable()
    images: Image[]

    @Column()
    title: string

    @Column()
    text: string
}
