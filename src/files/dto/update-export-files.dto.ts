import { PartialType } from '@nestjs/mapped-types';
import { CreateExportFilesDto } from './create-export-files.dto';

export class UpdateExportFilesDto extends PartialType(CreateExportFilesDto) {}
