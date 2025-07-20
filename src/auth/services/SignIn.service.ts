import { Injectable } from '@nestjs/common';

@Injectable()
export class SigninService {
  handle(body: any) {
    // Lógica de login
    return {
      statusCode: 200,
      accessToken: 'token_de_acesso',
    };
  }
}
