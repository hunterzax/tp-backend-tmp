import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ReleaseUioliSummaryManagementService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all ReleaseUioliSummaryManagement' };
  }

  async create(data: any) {
    return { message: 'This action adds a new ReleaseUioliSummaryManagement', data };
  }
}
