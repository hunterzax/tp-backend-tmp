import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all Event' };
  }

  async create(data: any) {
    return { message: 'This action adds a new Event', data };
  }
}
