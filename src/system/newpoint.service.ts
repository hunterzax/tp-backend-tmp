import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class NewpointService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all Newpoint' };
  }

  async create(data: any) {
    return { message: 'This action adds a new Newpoint', data };
  }
}
