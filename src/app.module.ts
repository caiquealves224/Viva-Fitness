import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MealModule } from './meal/meal.module';
import { DatabaseModule } from './db/database.module';

@Module({
  imports: [
    AuthModule, MealModule, DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
