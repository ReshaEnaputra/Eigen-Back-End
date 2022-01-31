import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}
    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
    @Get(':id')
    @ApiParam({ name: 'id' })
    findOne(@Param() params): Promise<User> {
        return this.userService.findOne(params.id);
    }
    @Post()
    create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
    }
    @Delete('id')
    @ApiParam({ name: 'id' })
    destroy(@Param() params): Promise<User> {
        return this.userService.destroy(params.id);
    }
}
