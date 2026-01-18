import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class QueryShipperNominationFileService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all QueryShipperNominationFile' };
  }

  async create(data: any) {
    return { message: 'This action adds a new QueryShipperNominationFile', data };
  }
}
