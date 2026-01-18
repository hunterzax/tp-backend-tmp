import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ReserveBalancingGasContractService } from './reserve-balancing-gas-contract.service';
import { CreateReserveBalancingGasContractDto } from './dto/create-reserve-balancing-gas-contract.dto';
import { UpdateReserveBalancingGasContractDto } from './dto/update-reserve-balancing-gas-contract.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('reserve-balancing-gas-contract')
@UseGuards(AuthGuard)
export class ReserveBalancingGasContractController {
  constructor(private readonly service: ReserveBalancingGasContractService) {}

  @Post()
  create(@Body() createDto: CreateReserveBalancingGasContractDto) {
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
  update(@Param('id') id: string, @Body() updateDto: UpdateReserveBalancingGasContractDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
