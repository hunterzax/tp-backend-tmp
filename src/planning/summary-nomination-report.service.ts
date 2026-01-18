import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SummaryNominationReportService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all SummaryNominationReport' };
  }

  async create(data: any) {
    return { message: 'This action adds a new SummaryNominationReport', data };
  }
}
