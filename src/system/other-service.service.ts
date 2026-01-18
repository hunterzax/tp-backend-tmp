import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateOtherServiceDto } from './dto/create-other-service.dto';
import { UpdateOtherServiceDto } from './dto/update-other-service.dto';

@Injectable()
export class OtherServiceService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateOtherServiceDto) {
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

  async update(id: number, updateDto: UpdateOtherServiceDto) {
     return { message: `This action updates a #${id} OtherService`, data: updateDto };
  }

  async remove(id: number) {
    return this.prisma.systemParameter.delete({ where: { id } });
  }
}
