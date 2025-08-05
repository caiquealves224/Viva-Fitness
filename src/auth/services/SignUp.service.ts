
import { ConflictException, Inject, Injectable } from '@nestjs/common';
import SignUpDTO from '../dtos/SignUp.dto';
import { LibSQLDatabase } from 'drizzle-orm/libsql';
import * as schema from 'src/db/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class SignupService {
  constructor(
    @Inject('database') private db: LibSQLDatabase<typeof schema>,
    @Inject('USERS_TABLE') private usersTable: schema.UsersTableType,
  ) {}
  public async handle(body: SignUpDTO) {
    const user = await this.db.query.usersTable.findFirst({
      columns: { email: true },
      where: eq(this.usersTable.email, body.email),
    })

    if (user) {
      throw new ConflictException('Email already exists');
    }

    // Lógica de cadastro
    this.db.insert(this.usersTable).values({
      email: body.email,
      name: body.name,
      password: body.password,
      activityLevel: body.activityLevel,
      birthDate: body.birthDate,
      calories: 0,
      protein: 0,
      carbohydrate: 0,
      fats: 0,
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
