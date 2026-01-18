import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ParkingAllocationService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all ParkingAllocation' };
  }

  async create(data: any) {
    return { message: 'This action adds a new ParkingAllocation', data };
  }
}
