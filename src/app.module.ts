import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MealModule } from './meal/meal.module';

@Module({
  imports: [AuthModule, MealModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
