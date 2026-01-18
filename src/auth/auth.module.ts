import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AuthController } from './auth.controller';
import { AppController } from './app.controller';
import { AuthService } from './auth.service';
import { AppService } from './app.service';

@Module({
  controllers: [AuthController, AppController],
  providers: [AuthService, AppService, PrismaService],
})
export class AuthModule {}
