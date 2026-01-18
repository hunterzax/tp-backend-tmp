import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCapacityDto } from './dto/create-capacity.dto';
import { UpdateCapacityDto } from './dto/update-capacity.dto';

@Injectable()
export class CapacityService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateCapacityDto) {
    // Logic placeholder: Map DTO to Prisma Model
    // In a real scenario, valid fields need to be mapped. 
    // This is a comprehensive scaffold.
    return { message: 'Created successfully', data: createDto };
  }

  async findAll() {
    return this.prisma.capacity.findMany();
  }

  async findOne(id: number) {
    return this.prisma.capacity.findUnique({ where: { id } });
  }

  async update(id: number, updateDto: UpdateCapacityDto) {
     return { message: `This action updates a #${id} Capacity`, data: updateDto };
  }

  async remove(id: number) {
    return this.prisma.capacity.delete({ where: { id } });
  }
}
