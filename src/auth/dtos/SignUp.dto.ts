import { 
  IsString,
  MinLength,
  MaxLength,
  IsEmail,
  IsEnum,
  IsDateString, 
  IsNumber,
  Min,
  Max
} from "class-validator";

enum GoalTypes {
  LOSE = 'lose',
  MAINTAIN = 'maintain',
  GAIN = 'gain',
}

export const activityLevels = ['sedentary', 'light', 'moderate', 'active', 'very active'];

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
  height: number; // in cm
  
  @IsNumber()
  weight: number; // in kg

  @IsNumber()
  @Min(1)
  @Max(5)
  activityLevel: typeof activityLevels[number];
}