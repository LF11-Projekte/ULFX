import { Column, Entity, JoinColumn, OneToMany, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => User, (admin) => admin.id)
    @JoinColumn()
    admin: User | null

    @ManyToMany(() => User, (user) => user.id)
    @JoinColumn()
    user: User[]
    
}