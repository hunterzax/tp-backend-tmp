import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SubmissionFileService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all SubmissionFile' };
  }

  async create(data: any) {
    return { message: 'This action adds a new SubmissionFile', data };
  }
}
