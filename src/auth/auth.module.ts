import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { SigninService } from './services/signin.service';
import { SignupService } from './services/signup.service';

@Module({
  controllers: [AuthController],
  providers: [SigninService, SignupService],
})
export class AuthModule {}
