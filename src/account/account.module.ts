import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AccountManageController } from './account-manage.controller';
import { AccountManageService } from './account-manage.service';

@Module({
  controllers: [AccountManageController],
  providers: [AccountManageService, PrismaService],
})
export class AccountModule {}
