import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PlanningFileSubmissionTemplateService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all PlanningFileSubmissionTemplate' };
  }

  async create(data: any) {
    return { message: 'This action adds a new PlanningFileSubmissionTemplate', data };
  }
}
