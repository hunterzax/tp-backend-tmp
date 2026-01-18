import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateAllocationModeDto } from './dto/create-allocation-mode.dto';
import { UpdateAllocationModeDto } from './dto/update-allocation-mode.dto';

@Injectable()
export class AllocationModeService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateAllocationModeDto) {
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

  async update(id: number, updateDto: UpdateAllocationModeDto) {
     return { message: `This action updates a #${id} AllocationMode`, data: updateDto };
  }

  async remove(id: number) {
    return this.prisma.allocation.delete({ where: { id } });
  }
}
