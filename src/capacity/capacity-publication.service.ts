import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CapacityPublicationService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all CapacityPublication' };
  }

  async create(data: any) {
    return { message: 'This action adds a new CapacityPublication', data };
  }
}
