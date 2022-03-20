import { IQuery } from '@nestjs/cqrs';

export class StageQuery implements IQuery {
  constructor(public readonly stageId: string) {}
}
