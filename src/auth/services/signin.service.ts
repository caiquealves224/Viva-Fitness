import { Injectable } from '@nestjs/common';

@Injectable()
export class SigninService {
  handle(body: any) {
    // Lógica de login
    return 'Usuário autenticado';
  }
}
