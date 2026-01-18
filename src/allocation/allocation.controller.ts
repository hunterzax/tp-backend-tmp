import { Controller, Get, Post, Body, UseGuards, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc, GrpcMethod } from '@nestjs/microservices';
import { AllocationService } from './allocation.service';
import { AuthGuard } from '../common/guards/auth.guard';
import { Observable } from 'rxjs';

interface AllocationData {
    id: number;
    value: number;
}

@Controller('allocation')
@UseGuards(AuthGuard)
export class AllocationController implements OnModuleInit {
    private allocationServiceGrpc: any; // Interface for internal gRPC calls if needed

    constructor(
        private readonly allocationService: AllocationService,
        // Example of injecting a client to talk to ITSELF or another microservice via gRPC
        // @Inject('ALLOCATION_PACKAGE') private client: ClientGrpc 
    ) { }

    onModuleInit() {
        // If we were consuming another service:
        // this.allocationServiceGrpc = this.client.getService<AllocationService>('AllocationService');
    }

    // --- REST Endpoints ---

    @Get()
    async getAllAllocations() {
        return this.allocationService.findAll();
    }

    @Post('calculate')
    async triggerCalculation(@Body() body: any) {
        return this.allocationService.calculateAllocation(body);
    }

    // --- gRPC Methods ---

    @GrpcMethod('AllocationService', 'ProcessAllocation')
    processAllocation(data: AllocationData): AllocationData {
        console.log('gRPC Call Received:', data);
        return {
            id: data.id,
            value: data.value * 1.5, // Logic
        };
    }
}
