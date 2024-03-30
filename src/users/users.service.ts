import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/createUser.dto';
import { UpdateUserDto } from './dtos/updateUser.dto';

@Injectable()
export class UsersService {
  // Injectable the User repository
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

  // Get all Users
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // Get Single USer
  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({where: {id}});
  }

  // Create User
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    await this.userRepository.save(user);
    return user;
  }

  // Update User
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.preload({
      id,
      ...updateUserDto
    });
    if (!user) {
      throw new HttpException(`User #${id} not found`, HttpStatus.NOT_FOUND);
    }
    return this.userRepository.save(user);
  }

  // Remove User
  async remove(id: number): Promise<User> {
    const user = await this.findOne(id)
    return this.userRepository.remove(user);
  }
}