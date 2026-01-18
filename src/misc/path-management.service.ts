import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PathManagementService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all PathManagement' };
  }

  async create(data: any) {
    return { message: 'This action adds a new PathManagement', data };
  }
}
