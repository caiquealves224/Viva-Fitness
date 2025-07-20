import { 
  IsString,
  MinLength,
  MaxLength,
  IsEmail,
  IsEnum,
  IsDateString, 
  IsNumber
} from "class-validator";

enum GoalTypes {
  LOSE = 'lose',
  MAINTAIN = 'maintain',
  GAIN = 'gain',
}

enum activityLevels {
  SEDENTARY = '1',
  LIGHT = '2',
  MODERATE = '3',
  ACTIVE = '4',
  VERY_ACTIVE = '5',
}

export default class SignUpDTO {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(100)
  password: string;

  @IsEnum(GoalTypes)
  goal: GoalTypes;

  @IsEnum(['male', 'female'])
  gender: 'male' | 'female';

  @IsDateString()
  birthDate: string;

  @IsNumber()
  @MinLength(1)
  @MaxLength(3)
  height: number; // in cm
  
  @IsNumber()
  @MinLength(1)
  @MaxLength(3)
  weight: number; // in kg

  @IsEnum(activityLevels)
  activityLevel: activityLevels;
}