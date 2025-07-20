

import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignupService } from './services/signup.service';
import { SigninService } from './services/signin.service';


@Controller('auth')
export class AuthController {
  constructor(
    private readonly signupService: SignupService,
    private readonly signinService: SigninService,
  ) {}

  @Post('signup')
  signup(@Body() body: any) {
    return this.signupService.handle(body);
  }

  @Get('signin')
  signin(@Body() body: any) {
    return this.signinService.handle(body);
  }
}
