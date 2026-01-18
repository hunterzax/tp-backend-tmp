import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AssetController } from './asset.controller';
import { AstosController } from './astos.controller';
import { MeteringManagementController } from './metering-management.controller';
import { AssetService } from './asset.service';
import { AstosService } from './astos.service';
import { MeteringManagementService } from './metering-management.service';

@Module({
  controllers: [AssetController, AstosController, MeteringManagementController],
  providers: [AssetService, AstosService, MeteringManagementService, PrismaService],
})
export class AssetModule {}
