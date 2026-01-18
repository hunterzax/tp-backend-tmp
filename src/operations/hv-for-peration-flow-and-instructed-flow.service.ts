import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateHvForPerationFlowAndInstructedFlowDto } from './dto/create-hv-for-peration-flow-and-instructed-flow.dto';
import { UpdateHvForPerationFlowAndInstructedFlowDto } from './dto/update-hv-for-peration-flow-and-instructed-flow.dto';

@Injectable()
export class HvForPerationFlowAndInstructedFlowService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateHvForPerationFlowAndInstructedFlowDto) {
    // Logic placeholder: Map DTO to Prisma Model
    // In a real scenario, valid fields need to be mapped. 
    // This is a comprehensive scaffold.
    return { message: 'Created successfully', data: createDto };
  }

  async findAll() {
    return this.prisma.flowRecord.findMany();
  }

  async findOne(id: number) {
    return this.prisma.flowRecord.findUnique({ where: { id } });
  }

  async update(id: number, updateDto: UpdateHvForPerationFlowAndInstructedFlowDto) {
     return { message: `This action updates a #${id} HvForPerationFlowAndInstructedFlow`, data: updateDto };
  }

  async remove(id: number) {
    return this.prisma.flowRecord.delete({ where: { id } });
  }
}
