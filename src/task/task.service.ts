import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/typeorm';
import { Repository } from 'typeorm';
import { UpdateTaskDTO } from './dto/isDone.dto';
import { CreateTaskDTO } from './dto/task.dto';

@Injectable()
export class TaskService {
    

    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>
    ){}

    createTask(createTaskDTO: CreateTaskDTO) {
        const newTask = this.taskRepository.create(createTaskDTO);
        return this.taskRepository.save(newTask);

    }

    findAll(): Promise<Task[]> {
        return this.taskRepository.find();
    }

    findOne(id: number) {
        return this.taskRepository.findOne(id);
    }

    async updateTask(id: number, updateTaskDTO: UpdateTaskDTO){
        return await this.taskRepository.update(id,updateTaskDTO);
    }

    async remove(id: number) {
        return await this.taskRepository.delete(id);
    }

}
