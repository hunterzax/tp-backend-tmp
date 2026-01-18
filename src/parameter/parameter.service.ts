import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateParameterDto } from './dto/create-parameter.dto';
import { UpdateParameterDto } from './dto/update-parameter.dto';

@Injectable()
export class ParameterService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateParameterDto) {
    // Logic placeholder: Map DTO to Prisma Model
    // In a real scenario, valid fields need to be mapped. 
    // This is a comprehensive scaffold.
    return { message: 'Created successfully', data: createDto };
  }

  async findAll() {
    return this.prisma.systemParameter.findMany();
  }

  async findOne(id: number) {
    return this.prisma.systemParameter.findUnique({ where: { id } });
  }

  async update(id: number, updateDto: UpdateParameterDto) {
     return { message: `This action updates a #${id} Parameter`, data: updateDto };
  }

  async remove(id: number) {
    return this.prisma.systemParameter.delete({ where: { id } });
  }
}
