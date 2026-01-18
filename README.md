# TPA Backend
<a href="https://scan.coverity.com/projects/hunterzax-tp-backend-tmp">
  <img alt="Coverity Scan Build Status"
       src="https://scan.coverity.com/projects/32846/badge.svg"/>
</a>


This is a scaffolded NestJS application for an TP-Backend system, including modules for Allocation, Capacity, Planning, and more.

## Prerequisites

- Node.js (v18+)
- SQLite (default) or PostgreSQL

## Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Environment Setup**
    The project is configured for **SQLite** by default.
    ```properties
    DATABASE_URL="file:./dev.db"
    ```

3.  **Database Migration**
    Initialize the SQLite database:
    ```bash
    npx prisma migrate dev --name init
    ```

4.  **Run the Application**
    ```bash
    npm run start:dev
    ```

> **Note:** Redis dependencies are installed but not configured. If you need caching, ensure you have a Redis instance running or switch to an in-memory cache.


## Features

- **Hybrid Architecture**: Supports both REST and gRPC (see `src/main.ts`).
- **Allocation Module**: Example of a feature module with `AllocationController` handling both HTTP and gRPC requests.
- **Microservices**: Configured with `@nestjs/microservices`.
- **Proto Files**: `proto/allocation.proto` included and configured in `nest-cli.json`.

## Project Structure

- `src/allocation`: Feature module for Allocation logic.
- `src/parameter`: System configuration and deadlines.
- `src/common`: shared guards and interceptors.
