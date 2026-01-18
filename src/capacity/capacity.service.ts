import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CapacityService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all Capacity' };
  }

  async create(data: any) {
    return { message: 'This action adds a new Capacity', data };
  }
}
