import { Module, ModuleMetadata } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { StageController } from '../controller/stage.controller';
import { StageQueryHandler } from '../query/handler/stage.query.handler';
import { StageService } from '../service/stage.service';

const metadata: ModuleMetadata = {
  imports: [CqrsModule],
  controllers: [StageController],
  providers: [StageService, StageQueryHandler],
};

@Module(metadata)
export class StageModule {}
