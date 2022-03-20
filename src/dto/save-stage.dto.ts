import { IsNumber, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class SaveStageDto {
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  start: number;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  level: number;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  end: number;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(1)
  times: number;
}
