import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCurrentAllocationDto } from './dto/create-current-allocation.dto';
import { UpdateCurrentAllocationDto } from './dto/update-current-allocation.dto';

@Injectable()
export class CurrentAllocationService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateCurrentAllocationDto) {
    // Logic placeholder: Map DTO to Prisma Model
    // In a real scenario, valid fields need to be mapped. 
    // This is a comprehensive scaffold.
    return { message: 'Created successfully', data: createDto };
  }

  async findAll() {
    return this.prisma.allocation.findMany();
  }

  async findOne(id: number) {
    return this.prisma.allocation.findUnique({ where: { id } });
  }

  async update(id: number, updateDto: UpdateCurrentAllocationDto) {
     return { message: `This action updates a #${id} CurrentAllocation`, data: updateDto };
  }

  async remove(id: number) {
    return this.prisma.allocation.delete({ where: { id } });
  }
}
