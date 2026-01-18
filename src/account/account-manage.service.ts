import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AccountManageService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all AccountManage' };
  }

  async create(data: any) {
    return { message: 'This action adds a new AccountManage', data };
  }
}
