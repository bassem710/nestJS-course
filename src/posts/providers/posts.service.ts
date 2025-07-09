import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}

  public findAll(userId?: number) {
    if (userId) {
      const user = this.usersService.findOneById(userId);
      return [
        {
          user: user,
          title: 'Test Tile',
          content: 'Test Content',
        },
        {
          user: user,
          title: 'Test Tile 2',
          content: 'Test Content 2',
        },
      ];
    }

    // Return all posts without user filtering
    return [
      {
        title: 'Test Tile',
        content: 'Test Content',
      },
      {
        title: 'Test Tile 2',
        content: 'Test Content 2',
      },
    ];
  }
}
