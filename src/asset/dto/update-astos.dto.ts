import { PartialType } from '@nestjs/mapped-types';
import { CreateAstosDto } from './create-astos.dto';

export class UpdateAstosDto extends PartialType(CreateAstosDto) {}
