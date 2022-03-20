import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Stage } from 'src/entity/stage.entity';
import { StageQuery } from '../interface/stage.query';

@QueryHandler(StageQuery)
export class StageQueryHandler implements IQueryHandler {
  async execute(filter: StageQuery): Promise<Stage> {
    return {
      id: filter.stageId,
      level: 1,
      start: 0,
      end: 2,
      times: 2,
      operations: [],
      commands: [],
    };
  }
}
