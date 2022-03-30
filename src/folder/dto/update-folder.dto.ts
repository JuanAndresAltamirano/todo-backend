import { PartialType } from '@nestjs/swagger';
import { Task } from 'src/typeorm/Task'
import { CreateFolderDTO } from './folder.dto';

export class UpdateFolderDTO extends PartialType(CreateFolderDTO) {
    tasks:Task[]
}