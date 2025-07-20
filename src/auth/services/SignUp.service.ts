import { Injectable } from '@nestjs/common';

@Injectable()
export class SignupService {
  handle(body: any) {
    // Lógica de cadastro
    return {
      statusCode: 200,
      accessToken: 'token_de_acesso',
    };
  }
}
