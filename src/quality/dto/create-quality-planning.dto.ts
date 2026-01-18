import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateQualityPlanningDto {
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
