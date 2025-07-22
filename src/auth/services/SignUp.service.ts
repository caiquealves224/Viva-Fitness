
import { Inject, Injectable } from '@nestjs/common';
import { Database } from 'src/db/database.module';
import type { Table } from 'drizzle-orm';
import * as schema from 'src/db/schema';

@Injectable()
export class SignupService {
  constructor(
    @Inject('database') private db: Database,
    @Inject('USERS_TABLE') private usersTable: Table,
  ) {}
  handle(body: any) {
    // Lógica de cadastro
    this.db.insert(this.usersTable).values({
      username: body.username,
      password: body.password,
      
    });

    return {
      statusCode: 200,
      accessToken: 'token_de_acesso',
    };
  }
}
