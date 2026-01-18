import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ReleaseCapacityManagementService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all ReleaseCapacityManagement' };
  }

  async create(data: any) {
    return { message: 'This action adds a new ReleaseCapacityManagement', data };
  }
}
