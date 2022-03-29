import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, FindRelationsNotFoundError } from "typeorm";

@Entity()
export class Task {

    @PrimaryGeneratedColumn({
        name: 'task_id',
    })
    id: number;

    @Column({
        nullable: false,
        name: 'task_name',
        default: ''
    })
    name: string;

    @Column({
        name: 'task_status',
        default: 0
    })
    isDone: boolean;

    //@ManyToOne(type => Folder,)
}