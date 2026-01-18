import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class DailyManagementService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all DailyManagement' };
  }

  async create(data: any) {
    return { message: 'This action adds a new DailyManagement', data };
  }
}
