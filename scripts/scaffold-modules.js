const fs = require('fs');
const path = require('path');
const { join } = path;

const rootDir = path.join(__dirname, '../src');

// Function to convert CamelCase to kebab-case
const toKebabCase = (str) =>
    str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

// Structure definition based on the plan
const modules = {
    auth: ['Auth', 'App'],
    account: ['AccountManage'],
    allocation: ['AllocationMode', 'Balancing', 'ParkingAllocation', 'CurrentAllocation'],
    capacity: [
        'Capacity',
        'CapacityDashboard',
        'CapacityPublication',
        'CapacityV2',
        'ReleaseCapacityManagement',
        'ReleaseCapacitySubmission',
        'ReleaseUioliSummaryManagement',
        'UseItOrLoseIt',
    ],
    planning: [
        'NominationDashboard',
        'PlanningDashboard',
        'PlanningFileSubmissionTemplate',
        'PlanningSubmissionFile',
        'QueryShipperNominationFile',
        'QueryShipperPlanningFile',
        'SummaryNominationReport',
    ],
    operations: [
        'DailyAdjustment',
        'DailyManagement',
        'WeeklyManagement',
        'HvForPerationFlowAndInstructedFlow',
    ],
    asset: ['Asset', 'Astos', 'MeteringManagement'],
    system: ['Event', 'Newpoint', 'OtherService'],
    files: ['ExportFiles', 'SubmissionFile', 'UploadTemplateForShipper'],
    quality: ['QualityEvaluation', 'QualityPlanning', 'Tariff'],
    misc: [
        'BulletinBoard',
        'MinimumInventorySummary',
        'PathManagement',
        'ReserveBalancingGasContract',
        'WaitingList',
    ],
};

function createService(name) {
    return `import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ${name}Service {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return { message: 'This action returns all ${name}' };
  }

  async create(data: any) {
    return { message: 'This action adds a new ${name}', data };
  }
}
`;
}

function createController(name, kebabName) {
    return `import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ${name}Service } from './${kebabName}.service';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('${kebabName}')
@UseGuards(AuthGuard)
export class ${name}Controller {
  constructor(private readonly service: ${name}Service) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }
}
`;
}

function createModule(moduleName, controllers) {
    const imports = controllers
        .map((c) => `import { ${c}Controller } from './${toKebabCase(c)}.controller';`)
        .join('\n');
    const serviceImports = controllers
        .map((c) => `import { ${c}Service } from './${toKebabCase(c)}.service';`)
        .join('\n');

    const controllerList = controllers.map((c) => `${c}Controller`).join(', ');
    const serviceList = controllers.map((c) => `${c}Service`).join(', ');

    return `import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
${imports}
${serviceImports}

@Module({
  controllers: [${controllerList}],
  providers: [${serviceList}, PrismaService],
})
export class ${moduleName.charAt(0).toUpperCase() + moduleName.slice(1)}Module {}
`;
}

// Execution
Object.entries(modules).forEach(([moduleName, controllers]) => {
    const moduleDir = join(rootDir, moduleName);

    // Create directory if not exists
    if (!fs.existsSync(moduleDir)) {
        fs.mkdirSync(moduleDir, { recursive: true });
        console.log(`Created directory: ${moduleDir}`);
    }

    // Generate Controllers and Services
    controllers.forEach((controllerName) => {
        const kebabName = toKebabCase(controllerName);

        // Service
        const servicePath = join(moduleDir, `${kebabName}.service.ts`);
        if (!fs.existsSync(servicePath)) {
            fs.writeFileSync(servicePath, createService(controllerName));
        }

        // Controller
        const controllerPath = join(moduleDir, `${kebabName}.controller.ts`);
        if (!fs.existsSync(controllerPath)) {
            fs.writeFileSync(controllerPath, createController(controllerName, kebabName));
        }
    });

    // Generate Module File (Overwrite or Create)
    // For 'allocation' and 'parameter', we need to be careful not to overwrite fully, 
    // but for the sake of this prompt, we are "scaffolding" the rest.
    // The user asked to "scaffold everything". 
    // 'allocation' already exists with custom logic, let's append OR just warn.
    // 'parameter' was handled as system/parameter.
    // But wait, plan said 'Allocation' exists, append.

    if (moduleName === 'allocation') {
        console.log('Skipping simplified module generation for existing Allocation module to preserve custom logic. Please manually register new controllers if any.');
        // In a real script we would AST parse and append, but here we'll just skip generating the module file
        // and only generate the NEW controllers/services (which the loop above did).
        // We should arguably update allocation.module.ts, but let's do that manually or skip if complex.
        // For this task, let's overwrite for simplicity unless it destroys work. 
        // The loop above only creates file if *not exists*. 
        // So allocation.controller.ts is safe.
        // But we need to register the new ones.
        return;
    }

    const moduleFilePath = join(moduleDir, `${moduleName}.module.ts`);
    fs.writeFileSync(moduleFilePath, createModule(moduleName, controllers));
    console.log(`Generated module: ${moduleName}`);
});

console.log('Scaffolding complete.');
