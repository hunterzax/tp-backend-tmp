import { PartialType } from '@nestjs/mapped-types';
import { CreateCurrentAllocationDto } from './create-current-allocation.dto';

export class UpdateCurrentAllocationDto extends PartialType(CreateCurrentAllocationDto) {}
