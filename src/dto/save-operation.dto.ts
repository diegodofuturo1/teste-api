import { IsNumber, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { operation } from 'src/type/operation.type';

export class SaveOperationDto {
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  value: number;

  @IsString()
  type: operation;

  @IsString()
  stageId: operation;
}
