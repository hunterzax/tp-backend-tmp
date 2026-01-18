import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ReserveBalancingGasContractService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all ReserveBalancingGasContract' };
  }

  async create(data: any) {
    return { message: 'This action adds a new ReserveBalancingGasContract', data };
  }
}
