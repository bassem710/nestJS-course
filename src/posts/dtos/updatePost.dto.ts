import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsNotEmpty } from 'class-validator';

import { CreatePostDto } from './createPost.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsInt()
  @IsNotEmpty()
  id: number;
}
