import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all App' };
  }

  async create(data: any) {
    return { message: 'This action adds a new App', data };
  }
}
