/*
  Warnings:

  - You are about to drop the column `logo_path` on the `companies` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "communications" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sender_id" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "file_path" TEXT,
    "target_type" TEXT NOT NULL,
    "company_id" INTEGER,
    "contact_id" INTEGER,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "communications_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "admins" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "communications_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "communications_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "contacts" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_companies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    "updated_by_id" INTEGER,
    "updated_by_type" TEXT
);
INSERT INTO "new_companies" ("cnpj", "created_at", "deleted_at", "email", "id", "name", "password_hash", "status", "updated_at", "updated_by_id", "updated_by_type") SELECT "cnpj", "created_at", "deleted_at", "email", "id", "name", "password_hash", "status", "updated_at", "updated_by_id", "updated_by_type" FROM "companies";
DROP TABLE "companies";
ALTER TABLE "new_companies" RENAME TO "companies";
CREATE UNIQUE INDEX "companies_cnpj_key" ON "companies"("cnpj");
CREATE UNIQUE INDEX "companies_email_key" ON "companies"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
