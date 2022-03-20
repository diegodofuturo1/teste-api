import { Injectable } from '@nestjs/common';
import { Stage } from 'src/entity/stage.entity';
import { CommandBus, QueryBus, EventBus } from '@nestjs/cqrs';
import { StageQuery } from '../query/interface/stage.query';

@Injectable()
export class StageService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly eventBus: EventBus,
  ) {}

  async getStage(): Promise<Stage> {
    return await this.queryBus.execute(new StageQuery('100'));
  }
}
