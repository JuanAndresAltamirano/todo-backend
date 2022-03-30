import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Folder } from 'src/typeorm/Folder';
import { Repository } from 'typeorm';
import { CreateFolderDTO } from './dto/folder.dto';
import { Task } from 'src/typeorm';
import { UpdateFolderDTO } from './dto/update-folder.dto';

@Injectable()
export class FolderService {

    constructor(
        @InjectRepository(Folder)
        private folderRepository: Repository<Folder>,
        @InjectRepository(Folder)
        private taskRepository: Repository<Task>
    ){}

    async create(createFolderDTO: CreateFolderDTO) {
        return await this.folderRepository.insert(createFolderDTO)
    }

    findAll() {
        return this.folderRepository.find();
    }
    
    findOne(id: number) {
        return this.folderRepository.findOne(id,{relations:["todos"]});
    }
    
    async update(id: number, updateFolderDto: UpdateFolderDTO) {
        return await this.folderRepository.save(updateFolderDto);
    }
    
    async remove(id: number) {
        return await this.folderRepository.delete(id);
    }

}
