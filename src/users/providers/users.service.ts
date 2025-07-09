import { CreateUserDto } from '../dtos/createUser.dto';
import { GetUsersDto } from '../dtos/getUsers.dto';
import { ConflictException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dtos/updateUser.dto';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  public findAll(getUsersDto: GetUsersDto, limt: number, page: number) {
    console.log(getUsersDto);
    console.log(limt);
    console.log(page);
    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        firstName: 'Alice',
        email: 'alice@doe.com',
      },
    ];
  }

  public findOneById(id: number) {
    return {
      id,
      firstName: 'Alice',
      email: 'alice@doe.com',
    };
  }

  public async createUser(createUserDto: CreateUserDto) {
    // Check existing user
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (existingUser) {
      throw new ConflictException('User already exists');
    }
    // Create user
    const user = this.userRepository.create(createUserDto);
    // Save and return user
    return await this.userRepository.save(user);
  }

  public update(id: number, updateUserDto: UpdateUserDto) {
    return updateUserDto;
  }

  public remove(id: number) {
    return `User ${id} is deleted successfully`;
  }
}
