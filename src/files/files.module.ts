import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ExportFilesController } from './export-files.controller';
import { SubmissionFileController } from './submission-file.controller';
import { UploadTemplateForShipperController } from './upload-template-for-shipper.controller';
import { ExportFilesService } from './export-files.service';
import { SubmissionFileService } from './submission-file.service';
import { UploadTemplateForShipperService } from './upload-template-for-shipper.service';

@Module({
  controllers: [ExportFilesController, SubmissionFileController, UploadTemplateForShipperController],
  providers: [ExportFilesService, SubmissionFileService, UploadTemplateForShipperService, PrismaService],
})
export class FilesModule {}
