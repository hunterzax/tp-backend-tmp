import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UseItOrLoseItService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all UseItOrLoseIt' };
  }

  async create(data: any) {
    return { message: 'This action adds a new UseItOrLoseIt', data };
  }
}
