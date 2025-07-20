import { Injectable } from '@nestjs/common';

@Injectable()
export class SignupService {
  handle(body: any) {
    // Lógica de cadastro
    return 'Usuário cadastrado pelo SignupService';
  }
}
