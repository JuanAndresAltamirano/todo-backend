import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';

import { CreateTaskDTO } from './dto/task.dto';

@Controller('task')
export class TaskController {

    @Post('/create')
    createPost(@Res() res, @Body() createTaskDTO: CreateTaskDTO){
        console.log(createTaskDTO);
        return res.status(HttpStatus.OK).json({
            message: 'received'
        });
    }

}
