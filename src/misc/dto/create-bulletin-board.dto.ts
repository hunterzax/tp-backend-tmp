import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateBulletinBoardDto {
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  value?: number;
}
