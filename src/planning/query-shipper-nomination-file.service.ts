import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateQueryShipperNominationFileDto } from './dto/create-query-shipper-nomination-file.dto';
import { UpdateQueryShipperNominationFileDto } from './dto/update-query-shipper-nomination-file.dto';

@Injectable()
export class QueryShipperNominationFileService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateQueryShipperNominationFileDto) {
    // Logic placeholder: Map DTO to Prisma Model
    // In a real scenario, valid fields need to be mapped. 
    // This is a comprehensive scaffold.
    return { message: 'Created successfully', data: createDto };
  }

  async findAll() {
    return this.prisma.nomination.findMany();
  }

  async findOne(id: number) {
    return this.prisma.nomination.findUnique({ where: { id } });
  }

  async update(id: number, updateDto: UpdateQueryShipperNominationFileDto) {
     return { message: `This action updates a #${id} QueryShipperNominationFile`, data: updateDto };
  }

  async remove(id: number) {
    return this.prisma.nomination.delete({ where: { id } });
  }
}
