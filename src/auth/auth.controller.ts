

import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { SignupService } from './services/SignUp.service';
import { SigninService } from './services/SignIn.service';
import SigninDTO from './dtos/SignIn.dto';
import SignUpDTO from './dtos/SignUp.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly signupService: SignupService,
    private readonly signinService: SigninService,
  ) {}

  @Post('signup')
  signup(@Body() body: SignUpDTO) {
    return this.signupService.handle(body);
  }

  @Post('signin')
  signin(
    @Body() body: SigninDTO,
    @Param() params: string[],
    @Query() query: any,
  ) {
    return this.signinService.handle({body, params, query});
  }
}
