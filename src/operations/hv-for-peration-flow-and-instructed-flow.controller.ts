import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { HvForPerationFlowAndInstructedFlowService } from './hv-for-peration-flow-and-instructed-flow.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('hv-for-peration-flow-and-instructed-flow')
@UseGuards(AuthGuard)
export class HvForPerationFlowAndInstructedFlowController {
  constructor(private readonly service: HvForPerationFlowAndInstructedFlowService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
