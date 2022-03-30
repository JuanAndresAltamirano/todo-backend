import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Inject, Param, Patch, Query, NotFoundException } from '@nestjs/common';
import { UpdateTaskDTO } from './dto/isDone.dto';

import { CreateTaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(
        private readonly taskService: TaskService,
    ) {}

    @Post('/create')
    createTask(@Body() createTaskDTO: CreateTaskDTO){
        console.log(createTaskDTO);
        return this.taskService.createTask(createTaskDTO);
    }

    @Get()
    findAll() {
    return this.taskService.findAll();
    }

    @Get('/:id')
    async findOne(@Res() res, @Param('id') id) {
        const task = await this.taskService.findOne(id);
        if(!task) throw new NotFoundException('Task Does Not exists');
        return res.status(HttpStatus.OK).json(task);
    }

    @Put('/update')
    async updateTask(@Res() res, @Body() updateTaskDTO: UpdateTaskDTO, @Query('id') id){
        const updatedTask = await this.taskService.updateTask(id, updateTaskDTO);
        if(!updatedTask) throw new NotFoundException('Product Does not exists');
        return res.status(HttpStatus.OK).json({
            message: 'Task Updated Succesfully',
            updatedTask
        });
    }

    @Delete('/delete')
    async remove(@Res() res, @Query('id') id) {
    const taskDeleted = await this.taskService.remove(id);
    if(!taskDeleted) throw new NotFoundException('Task Does not exists');
    return res.status(HttpStatus.OK).json({
        message: 'Task Deleted Succesfully',
        taskDeleted
    })
  }

}
