-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_contacts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "company_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "birth_date" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" DATETIME,
    "updated_by_type" TEXT,
    "updated_by_id" INTEGER,
    CONSTRAINT "contacts_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_contacts" ("birth_date", "company_id", "created_at", "deleted_at", "email", "id", "name", "phone", "updated_at", "updated_by_id", "updated_by_type") SELECT "birth_date", "company_id", "created_at", "deleted_at", "email", "id", "name", "phone", "updated_at", "updated_by_id", "updated_by_type" FROM "contacts";
DROP TABLE "contacts";
ALTER TABLE "new_contacts" RENAME TO "contacts";
CREATE TABLE "new_item_visibility" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "company_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "is_visible" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_by_id" INTEGER,
    CONSTRAINT "item_visibility_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "item_visibility_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "onedrive_items" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_item_visibility" ("company_id", "created_at", "id", "is_visible", "item_id", "updated_at", "updated_by_id") SELECT "company_id", "created_at", "id", "is_visible", "item_id", "updated_at", "updated_by_id" FROM "item_visibility";
DROP TABLE "item_visibility";
ALTER TABLE "new_item_visibility" RENAME TO "item_visibility";
CREATE TABLE "new_onedrive_items" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "company_id" INTEGER NOT NULL,
    "item_id" TEXT NOT NULL,
    "parent_item_id" TEXT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "size" INTEGER,
    "mime_type" TEXT,
    "onedrive_path" TEXT,
    "etag" TEXT,
    "last_modified_by" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    "deleted_at" DATETIME,
    "updated_by_id" INTEGER,
    CONSTRAINT "onedrive_items_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_onedrive_items" ("company_id", "created_at", "deleted_at", "etag", "id", "item_id", "last_modified_by", "mime_type", "name", "onedrive_path", "parent_item_id", "size", "type", "updated_at", "updated_by_id") SELECT "company_id", "created_at", "deleted_at", "etag", "id", "item_id", "last_modified_by", "mime_type", "name", "onedrive_path", "parent_item_id", "size", "type", "updated_at", "updated_by_id" FROM "onedrive_items";
DROP TABLE "onedrive_items";
ALTER TABLE "new_onedrive_items" RENAME TO "onedrive_items";
CREATE UNIQUE INDEX "onedrive_items_item_id_key" ON "onedrive_items"("item_id");
CREATE TABLE "new_onedrive_tokens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "company_id" INTEGER NOT NULL,
    "access_token" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "expires_at" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    CONSTRAINT "onedrive_tokens_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_onedrive_tokens" ("access_token", "company_id", "created_at", "expires_at", "id", "refresh_token", "updated_at") SELECT "access_token", "company_id", "created_at", "expires_at", "id", "refresh_token", "updated_at" FROM "onedrive_tokens";
DROP TABLE "onedrive_tokens";
ALTER TABLE "new_onedrive_tokens" RENAME TO "onedrive_tokens";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
