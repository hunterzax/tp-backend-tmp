import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ReserveBalancingGasContractService } from './reserve-balancing-gas-contract.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('reserve-balancing-gas-contract')
@UseGuards(AuthGuard)
export class ReserveBalancingGasContractController {
  constructor(private readonly service: ReserveBalancingGasContractService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
