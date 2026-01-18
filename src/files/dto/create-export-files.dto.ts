import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateExportFilesDto {
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
