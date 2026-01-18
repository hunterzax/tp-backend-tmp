import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ParameterService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.systemParameter.findMany();
    }

    async getSystemDeadlines() {
        return this.prisma.systemParameter.findMany({
            where: {
                key: {
                    in: ['NOMINATION_DEADLINE', 'PLANNING_DEADLINE', 'ANNOUNCEMENT_DATE']
                }
            }
        });
    }

    async update(key: string, value: string) {
        return this.prisma.systemParameter.upsert({
            where: { key },
            update: { value },
            create: { key, value, description: 'Auto-created' },
        });
    }
}
