import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class WeeklyManagementService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all WeeklyManagement' };
  }

  async create(data: any) {
    return { message: 'This action adds a new WeeklyManagement', data };
  }
}
