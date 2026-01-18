import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CapacityV2Service {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all CapacityV2' };
  }

  async create(data: any) {
    return { message: 'This action adds a new CapacityV2', data };
  }
}
