import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
  id: integer().primaryKey({ autoIncrement: true }),
  email: text({ length: 255 }).notNull().unique(),
  password: text().notNull(),
  name: text({ length: 255 }).notNull(),
  goal: text({ length: 8 }).notNull(),
  gender: text({ length: 8 }).notNull(),
  birthDate: text("birth_date").notNull(),
  height: integer().notNull(), // in cm
  weight: integer().notNull(), // in kg
  activityLevel: text("activity_level").notNull(),

  // Goals
  calories: integer().notNull(),
  protein: integer().notNull(),
  carbohydrate: integer().notNull(),
  fats: integer().notNull(),

  // Timestamps
  // Using ISO 8601 format for consistency
  createdAt: text("created_at").default(new Date().toISOString()),
  updatedAt: text("updated_at").default(new Date().toISOString()),
  deletedAt: text("deleted_at").default(""),
});
