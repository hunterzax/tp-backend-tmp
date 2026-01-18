const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '../src/stress-test');
const modulesCount = 100; // 100 modules
const methodsPerService = 50; // 50 methods per service
const linesPerMethod = 20; // ~20 lines of logic per method -> 1000 lines per service

if (!fs.existsSync(rootDir)) {
    fs.mkdirSync(rootDir, { recursive: true });
}

function generateService(index) {
    let content = `import { Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class Stress${index}Service {\n`;

    for (let i = 0; i < methodsPerService; i++) {
        content += `  complexComputation${i}(input: number): number {\n`;
        content += `    let result = input;\n`;
        // Add dummy logic to consume lines
        for (let j = 0; j < linesPerMethod; j++) {
            content += `    result = (result * ${j + 1}) % 1000000;\n`;
            content += `    if (result < 0) result = Math.abs(result);\n`;
        }
        content += `    return result;\n`;
        content += `  }\n\n`;
    }

    content += `}\n`;
    return content;
}

function generateController(index) {
    let content = `import { Controller, Get, Param } from '@nestjs/common';\n`;
    content += `import { Stress${index}Service } from './stress-${index}.service';\n\n`;
    content += `@Controller('stress-${index}')\n`;
    content += `export class Stress${index}Controller {\n`;
    content += `  constructor(private readonly service: Stress${index}Service) {}\n\n`;

    for (let i = 0; i < methodsPerService; i++) {
        content += `  @Get('calc-${i}/:id')\n`;
        content += `  calc${i}(@Param('id') id: string) {\n`;
        content += `    return this.service.complexComputation${i}(+id);\n`;
        content += `  }\n\n`;
    }

    content += `}\n`;
    return content;
}

function generateModule(index) {
    return `import { Module } from '@nestjs/common';
import { Stress${index}Controller } from './stress-${index}.controller';
import { Stress${index}Service } from './stress-${index}.service';

@Module({
  controllers: [Stress${index}Controller],
  providers: [Stress${index}Service],
})
export class Stress${index}Module {}
`;
}

// Generate Sub-Modules
const moduleImports = [];
for (let i = 1; i <= modulesCount; i++) {
    const moduleName = `stress-${i}`;
    const moduleDir = path.join(rootDir, moduleName);

    if (!fs.existsSync(moduleDir)) {
        fs.mkdirSync(moduleDir);
    }

    fs.writeFileSync(path.join(moduleDir, `${moduleName}.service.ts`), generateService(i));
    fs.writeFileSync(path.join(moduleDir, `${moduleName}.controller.ts`), generateController(i));
    fs.writeFileSync(path.join(moduleDir, `${moduleName}.module.ts`), generateModule(i));

    moduleImports.push(`Stress${i}Module`);
    console.log(`Generated Stress Module ${i}`);
}

// Generate Main StressTest Module
const importStatements = moduleImports.map((m, i) => `import { ${m} } from './stress-${i + 1}/stress-${i + 1}.module';`).join('\n');

const mainModuleContent = `import { Module } from '@nestjs/common';
${importStatements}

@Module({
  imports: [
    ${moduleImports.join(',\n    ')}
  ],
})
export class StressTestModule {}
`;

fs.writeFileSync(path.join(rootDir, 'stress-test.module.ts'), mainModuleContent);
console.log('Massive generation complete.');
