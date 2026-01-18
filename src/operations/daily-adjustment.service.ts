import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class DailyAdjustmentService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all DailyAdjustment' };
  }

  async create(data: any) {
    return { message: 'This action adds a new DailyAdjustment', data };
  }
}
