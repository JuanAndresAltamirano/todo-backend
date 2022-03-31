import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Res, Query, HttpStatus, NotFoundException } from '@nestjs/common';
import { FolderService } from './folder.service';
import { CreateFolderDTO } from './dto/folder.dto';
import { UpdateFolderDTO } from './dto/update-folder.dto';

@Controller('folder')
export class FolderController {
    constructor(private readonly foldersService: FolderService) {}

  @Post('/create')
  async create(@Res() res, @Body() createFolderDTO: CreateFolderDTO) {
    const folder = await this.foldersService.create(createFolderDTO);
    return res.status(HttpStatus.OK).json({
        message: 'received',
        folder: folder
    });
  }

  @Get()
  findAll() {
    return this.foldersService.findAll();
  }

  @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const folder = await this.foldersService.findOne(id);
        if(!folder) throw new NotFoundException('Folder Does Not exists');
        return res.status(HttpStatus.OK).json(folder);
    }

    @Put('/update')
    async updateTask(@Res() res, @Body() updateTaskDTO: UpdateFolderDTO, @Query('id') id){
        const updatedTask = await this.foldersService.update(id, updateTaskDTO);
        if(!updatedTask) throw new NotFoundException('Folder Does not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Folder Updated Succesfully',
            updatedTask
        });
    }

  @Delete('/delete')
    async remove(@Res() res, @Query('id') id) {
    const folderDeleted = await this.foldersService.remove(id);
    if(!folderDeleted) throw new NotFoundException('Task Does not exists');
    return res.status(HttpStatus.OK).json({
        message: 'Folder Deleted Succesfully',
        folderDeleted
    })
  }
}
