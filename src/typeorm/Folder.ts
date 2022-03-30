import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from './Task';

@Entity()
export class Folder {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string
    @OneToMany(type => Task, task => task.folder,{cascade:true})
    tasks: Task[];

}