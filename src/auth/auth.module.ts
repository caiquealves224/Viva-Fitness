import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { SigninService } from './services/SignIn.service';
import { SignupService } from './services/SignUp.service';

@Module({
  controllers: [AuthController],
  providers: [SigninService, SignupService],
})
export class AuthModule {}
