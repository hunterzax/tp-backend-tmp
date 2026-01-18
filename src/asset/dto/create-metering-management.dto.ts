import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateMeteringManagementDto {
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
