import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {PetsService} from "../pets/pets.service";
import {Pet} from "../pets/entities/pet.entity";
import {User} from "./entities/user.entity";

@ApiTags("Users")
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @ApiResponse({
    status: 201,
    description: "Пользователь добавлен",
    type: User,
  })

  @Post('/')
  create(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @Get('/')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
