import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';

@Controller('users')
export class UsersController {
  // Add user service in constructor
  constructor(private readonly userService: UsersService){}

  @Get() // Handle get all user route
  getUsers() {
    return this.userService.findAll();
  }

  @Get(':id') // Handle get a single user
  getUser(@Param('id', ParseIntPipe) userId: number) {
    return this.userService.findOne(userId);
  }

  @Post() // Create a user
  AddUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Put(':id') // Update all user info
  updateUser(@Param('id', ParseIntPipe) userId: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(userId, updateUserDto);
  }

  @Patch(':id') // Update some user info
  patchUser(@Param('id', ParseIntPipe) userId: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(userId, updateUserDto);
  }

  @Delete(':id') // Delete a user
  removeUser(@Param('id', ParseIntPipe) userId: number) {
    return this.userService.remove(userId);
  }
}
