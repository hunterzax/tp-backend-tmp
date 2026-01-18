import { Controller, Get, Post, Body, Put, Param, UseGuards } from '@nestjs/common';
import { ParameterService } from './parameter.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('parameters')
@UseGuards(AuthGuard)
export class ParameterController {
    constructor(private readonly parameterService: ParameterService) { }

    @Get()
    async getAllParameters() {
        return this.parameterService.findAll();
    }

    @Get('deadlines')
    async getDeadlines() {
        // Specific logic for fetching Nomination and Planning deadlines
        return this.parameterService.getSystemDeadlines();
    }

    @Put(':key')
    async updateParameter(@Param('key') key: string, @Body('value') value: string) {
        return this.parameterService.update(key, value);
    }
}
