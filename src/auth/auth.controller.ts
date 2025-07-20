

import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { SignupService } from './services/SignUp.service';
import { SigninService } from './services/SignIn.service';

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
  signin(
    @Body() body: any,
    @Param() params: string[],
    @Query() query: any,
  ) {
    return this.signinService.handle({body, params, query});
  }
}
