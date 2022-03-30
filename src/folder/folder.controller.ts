import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FolderService } from './folder.service';
import { CreateFolderDTO } from './dto/folder.dto';
import { UpdateFolderDTO } from './dto/update-folder.dto';

@Controller('folder')
export class FolderController {
    constructor(private readonly foldersService: FolderService) {}

  @Post()
  create(@Body() createFolderDto: CreateFolderDTO) {
    return this.foldersService.create(createFolderDto);
  }

  @Get()
  findAll() {
    return this.foldersService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.foldersService.findOne(+id);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() updateFolderDTO: UpdateFolderDTO) {
    return this.foldersService.update(+id, updateFolderDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foldersService.remove(+id);
  }
}
