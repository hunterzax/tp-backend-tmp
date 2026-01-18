import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class QueryShipperPlanningFileService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all QueryShipperPlanningFile' };
  }

  async create(data: any) {
    return { message: 'This action adds a new QueryShipperPlanningFile', data };
  }
}
