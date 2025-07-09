import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostMetaOptionsDto {
  @IsString()
  @IsNotEmpty()
  key: string;

  @IsNotEmpty()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}
