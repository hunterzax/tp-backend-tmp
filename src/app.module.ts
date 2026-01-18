import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PrismaService } from './prisma.service';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { AllocationModule } from './allocation/allocation.module';
import { ParameterModule } from './parameter/parameter.module';

import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';
import { CapacityModule } from './capacity/capacity.module';
import { PlanningModule } from './planning/planning.module';
import { OperationsModule } from './operations/operations.module';
import { AssetModule } from './asset/asset.module';
import { SystemModule } from './system/system.module';
import { FilesModule } from './files/files.module';
import { QualityModule } from './quality/quality.module';
import { MiscModule } from './misc/misc.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        AllocationModule,
        ParameterModule,
        AuthModule,
        AccountModule,
        CapacityModule,
        PlanningModule,
        OperationsModule,
        AssetModule,
        SystemModule,
        FilesModule,
        QualityModule,
        MiscModule,
    ],
    controllers: [],
    providers: [
        PrismaService,
        {
            provide: APP_INTERCEPTOR,
            useClass: ResponseInterceptor,
        },
    ],
})
export class AppModule { }
