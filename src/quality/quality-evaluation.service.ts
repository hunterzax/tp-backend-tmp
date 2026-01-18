import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class QualityEvaluationService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all QualityEvaluation' };
  }

  async create(data: any) {
    return { message: 'This action adds a new QualityEvaluation', data };
  }
}
