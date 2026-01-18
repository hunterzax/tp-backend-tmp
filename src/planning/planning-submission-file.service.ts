import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PlanningSubmissionFileService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all PlanningSubmissionFile' };
  }

  async create(data: any) {
    return { message: 'This action adds a new PlanningSubmissionFile', data };
  }
}
