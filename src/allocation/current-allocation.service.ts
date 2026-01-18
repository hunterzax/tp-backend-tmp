import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CurrentAllocationService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all CurrentAllocation' };
  }

  async create(data: any) {
    return { message: 'This action adds a new CurrentAllocation', data };
  }
}
