import { PartialType } from '@nestjs/swagger'
import { CreateTaskDTO } from './task.dto';

export class UpdateTaskDTO extends PartialType(CreateTaskDTO) {
    readonly isDone:boolean;
}