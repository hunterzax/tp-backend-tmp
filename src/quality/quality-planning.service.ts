import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class QualityPlanningService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all QualityPlanning' };
  }

  async create(data: any) {
    return { message: 'This action adds a new QualityPlanning', data };
  }
}
