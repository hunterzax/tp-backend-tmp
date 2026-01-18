import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MeteringManagementService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all MeteringManagement' };
  }

  async create(data: any) {
    return { message: 'This action adds a new MeteringManagement', data };
  }
}
