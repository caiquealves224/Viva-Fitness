
import { Module } from '@nestjs/common';
import { db as drizzle } from '.';
import * as schema from './schema';

export type Database = typeof drizzle;

@Module({
  providers: [
    {
      provide: 'database',
      useValue: drizzle,
    },
    {
      provide: 'USERS_TABLE',
      useValue: schema.usersTable,
    },
  ],
  exports: ['database', 'USERS_TABLE'],
})
export class DatabaseModule {}