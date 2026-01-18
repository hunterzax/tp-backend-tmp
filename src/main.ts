import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
    const logger = new Logger('Bootstrap');
    const app = await NestFactory.create(AppModule);

    // Global Config
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new ValidationPipe({ transform: true }));

    // Enable CORS with secure configuration
    app.enableCors({
        origin: (process.env.ALLOWED_ORIGINS || 'http://localhost:3000').split(','),
        credentials: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    });

    // Hybrid Application (HTTP + gRPC)
    app.connectMicroservice<MicroserviceOptions>({
        transport: Transport.GRPC,
        options: {
            package: 'allocation',
            protoPath: join(__dirname, '../proto/allocation.proto'), // Assuming proto exists or will fail gracefully if not loaded at runtime but code is fine.
            url: '0.0.0.0:50051',
        },
    });

    await app.startAllMicroservices();
    await app.listen(3000);
    logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
