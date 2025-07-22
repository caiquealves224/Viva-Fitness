import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { SigninService } from './services/SignIn.service';
import { SignupService } from './services/SignUp.service';
import { DatabaseModule } from 'src/db/database.module';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [AuthController],
  providers: [SigninService, SignupService],
})
export class AuthModule {}
