import { Module } from '@nestjs/common';
import { ParameterController } from './parameter.controller';
import { ParameterService } from './parameter.service';
import { PrismaService } from '../prisma.service';

@Module({
    controllers: [ParameterController],
    providers: [ParameterService, PrismaService],
})
export class ParameterModule { }
