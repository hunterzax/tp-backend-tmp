import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ExportFilesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all ExportFiles' };
  }

  async create(data: any) {
    return { message: 'This action adds a new ExportFiles', data };
  }
}
