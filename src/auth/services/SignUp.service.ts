
import { Inject, Injectable } from '@nestjs/common';
import SignUpDTO from '../dtos/SignUp.dto';
import { LibSQLDatabase } from 'drizzle-orm/libsql';
import * as schema from 'src/db/schema';

@Injectable()
export class SignupService {
  constructor(
    @Inject('database') private db: LibSQLDatabase<typeof schema>,
    @Inject('USERS_TABLE') private usersTable: schema.UsersTableType,
  ) {}
  handle(body: SignUpDTO) {
    // Lógica de cadastro
    this.db.insert(this.usersTable).values({
      email: body.email,
      name: body.name,
      password: body.password,
      activityLevel: body.activityLevel,
      birthDate: body.birthDate,
      calories: null,
      protein: null,
      carbohydrate: null,
      fats: null,
      height: body.height,
      weight: body.weight,
      goal: body.goal,
      gender: body.gender,
    });

    return {
      statusCode: 200,
      accessToken: 'token_de_acesso',
    };
  }
}
