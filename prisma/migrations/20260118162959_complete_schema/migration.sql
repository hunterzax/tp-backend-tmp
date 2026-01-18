-- CreateTable
CREATE TABLE "CapacityPublication" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "publishDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "PlanningSubmission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "cycle" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ParkingAllocation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shipperId" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "balance" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "DailyAdjustment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "location" TEXT NOT NULL,
    "adjValue" REAL NOT NULL,
    "reason" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "FlowRecord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "point" TEXT NOT NULL,
    "flowRate" REAL NOT NULL,
    "timestamp" DATETIME NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "AssetItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "installDate" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "MeterReading" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "meterId" INTEGER NOT NULL,
    "value" REAL NOT NULL,
    "unit" TEXT NOT NULL,
    "readTime" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "QualityLog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "batchId" TEXT NOT NULL,
    "parameter" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "checkDate" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Tariff" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "rate" REAL NOT NULL,
    "currency" TEXT NOT NULL,
    "effectiveDate" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BulletinPost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "postedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Allocation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nominationId" INTEGER NOT NULL,
    "allocatedQty" REAL NOT NULL,
    "allocationDate" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "mode" TEXT NOT NULL DEFAULT 'AUTO',
    CONSTRAINT "Allocation_nominationId_fkey" FOREIGN KEY ("nominationId") REFERENCES "Nomination" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Allocation" ("allocatedQty", "allocationDate", "id", "nominationId", "status") SELECT "allocatedQty", "allocationDate", "id", "nominationId", "status" FROM "Allocation";
DROP TABLE "Allocation";
ALTER TABLE "new_Allocation" RENAME TO "Allocation";
CREATE TABLE "new_Capacity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "date" DATETIME NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'NORMAL',
    "createdById" INTEGER NOT NULL,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Capacity" ("createdById", "date", "id", "name", "updatedAt", "value") SELECT "createdById", "date", "id", "name", "updatedAt", "value" FROM "Capacity";
DROP TABLE "Capacity";
ALTER TABLE "new_Capacity" RENAME TO "Capacity";
CREATE TABLE "new_Nomination" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shipperId" INTEGER NOT NULL,
    "volume" REAL NOT NULL,
    "date" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "type" TEXT NOT NULL DEFAULT 'DAILY',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Nomination_shipperId_fkey" FOREIGN KEY ("shipperId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Nomination" ("date", "id", "shipperId", "status", "volume") SELECT "date", "id", "shipperId", "status", "volume" FROM "Nomination";
DROP TABLE "Nomination";
ALTER TABLE "new_Nomination" RENAME TO "Nomination";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "AssetItem_code_key" ON "AssetItem"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Tariff_code_key" ON "Tariff"("code");
