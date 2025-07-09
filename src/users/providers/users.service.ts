import { CreateUserDto } from '../dtos/createUser.dto';
import { GetUsersDto } from '../dtos/getUsers.dto';
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dtos/updateUser.dto';

@Injectable()
export class UsersService {
  public findAll(GetUsersDto: GetUsersDto, limt: number, page: number) {
    console.log(GetUsersDto);
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

  public create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  public update(id: number, updateUserDto: UpdateUserDto) {
    return updateUserDto;
  }

  public remove(id: number) {
    return `User ${id} is deleted successfully`;
  }
}
