import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class NominationDashboardService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all NominationDashboard' };
  }

  async create(data: any) {
    return { message: 'This action adds a new NominationDashboard', data };
  }
}
