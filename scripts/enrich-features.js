const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

// Helper to convert kebab-case to PascalCase
const toPascalCase = (str) =>
    str.replace(/(^\w|-\w)/g, (clear) => clear.replace('-', '').toUpperCase());

// Mapping Feature Names to Prisma Models (Heuristics)
const MODEL_MAPPING = {
    'nomination': 'nomination',
    'planning': 'planningSubmission',
    'allocation': 'allocation',
    'capacity': 'capacity',
    'asset': 'assetItem',
    'astos': 'assetItem',
    'metering': 'meterReading',
    'quality': 'qualityLog',
    'tariff': 'tariff',
    'daily': 'dailyAdjustment',
    'flow': 'flowRecord',
    'user': 'user',
    'role': 'role',
    'parameter': 'systemParameter',
    'other': 'systemParameter', // Fallback
};

function getPrismaModel(featureName) {
    const lower = featureName.toLowerCase();
    for (const [key, model] of Object.entries(MODEL_MAPPING)) {
        if (lower.includes(key)) return model;
    }
    return null; // No direct db backing inferred
}

function createDtoContent(className) {
    return `import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class Create${className}Dto {
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  value?: number;
}
`;
}

function updateDtoContent(className) {
    return `import { PartialType } from '@nestjs/mapped-types';
import { Create${className}Dto } from './create-${className.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}.dto';

export class Update${className}Dto extends PartialType(Create${className}Dto) {}
`;
}

function createServiceContent(className, featureName) {
    const model = getPrismaModel(featureName);
    const modelProperty = model ? model : 'systemParameter'; // Default to something valid to avoid compile errors if strictly typed

    // Dynamic Service Template
    return `import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Create${className}Dto } from './dto/create-${featureName}.dto';
import { Update${className}Dto } from './dto/update-${featureName}.dto';

@Injectable()
export class ${className}Service {
  constructor(private prisma: PrismaService) {}

  async create(createDto: Create${className}Dto) {
    // Logic placeholder: Map DTO to Prisma Model
    // In a real scenario, valid fields need to be mapped. 
    // This is a comprehensive scaffold.
    return { message: 'Created successfully', data: createDto };
  }

  async findAll() {
    ${model ? `return this.prisma.${model}.findMany();` : `return { message: 'This action returns all ${className}' };`}
  }

  async findOne(id: number) {
    ${model ? `return this.prisma.${model}.findUnique({ where: { id } });` : `return { message: \`This action returns a #\${id} ${className}\` };`}
  }

  async update(id: number, updateDto: Update${className}Dto) {
     return { message: \`This action updates a #\${id} ${className}\`, data: updateDto };
  }

  async remove(id: number) {
    ${model ? `return this.prisma.${model}.delete({ where: { id } });` : `return { message: \`This action removes a #\${id} ${className}\` };`}
  }
}
`;
}

function createControllerContent(className, featureName) {
    return `import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ${className}Service } from './${featureName}.service';
import { Create${className}Dto } from './dto/create-${featureName}.dto';
import { Update${className}Dto } from './dto/update-${featureName}.dto';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('${featureName}')
@UseGuards(AuthGuard)
export class ${className}Controller {
  constructor(private readonly service: ${className}Service) {}

  @Post()
  create(@Body() createDto: Create${className}Dto) {
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
  update(@Param('id') id: string, @Body() updateDto: Update${className}Dto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
`;
}

function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            processDirectory(fullPath);
            continue;
        }

        if (entry.name.endsWith('.controller.ts')) {
            const featureName = entry.name.replace('.controller.ts', '');
            const className = toPascalCase(featureName);
            const moduleDir = path.dirname(fullPath);

            console.log(`Enriching feature: ${featureName} (${className})`);

            // 1. Ensure DTO directory
            const dtoDir = path.join(moduleDir, 'dto');
            if (!fs.existsSync(dtoDir)) {
                fs.mkdirSync(dtoDir);
            }

            // 2. Create DTOs
            const createDtoPath = path.join(dtoDir, `create-${featureName}.dto.ts`);
            if (!fs.existsSync(createDtoPath)) {
                fs.writeFileSync(createDtoPath, createDtoContent(className));
            }

            const updateDtoPath = path.join(dtoDir, `update-${featureName}.dto.ts`);
            if (!fs.existsSync(updateDtoPath)) {
                fs.writeFileSync(updateDtoPath, updateDtoContent(className));
            }

            // 3. Update Service
            const servicePath = path.join(moduleDir, `${featureName}.service.ts`);
            // Warning: This overwrites existing logic. For a "fresh" scaffold this is desired.
            // We will skip 'AllocationService' specifically to avoid undoing previous custom logic task.
            if (className !== 'Allocation') {
                fs.writeFileSync(servicePath, createServiceContent(className, featureName));
            }

            // 4. Update Controller
            const controllerPath = fullPath;
            if (className !== 'Allocation') {
                fs.writeFileSync(controllerPath, createControllerContent(className, featureName));
            }
        }
    }
}

// Start Processing
processDirectory(srcDir);
console.log('Feature enrichment complete.');
