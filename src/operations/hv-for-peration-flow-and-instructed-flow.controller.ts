import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { HvForPerationFlowAndInstructedFlowService } from './hv-for-peration-flow-and-instructed-flow.service';
import { CreateHvForPerationFlowAndInstructedFlowDto } from './dto/create-hv-for-peration-flow-and-instructed-flow.dto';
import { UpdateHvForPerationFlowAndInstructedFlowDto } from './dto/update-hv-for-peration-flow-and-instructed-flow.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('hv-for-peration-flow-and-instructed-flow')
@UseGuards(AuthGuard)
export class HvForPerationFlowAndInstructedFlowController {
  constructor(private readonly service: HvForPerationFlowAndInstructedFlowService) {}

  @Post()
  create(@Body() createDto: CreateHvForPerationFlowAndInstructedFlowDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateHvForPerationFlowAndInstructedFlowDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
