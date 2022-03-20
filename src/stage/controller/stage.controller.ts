import { Controller, Get } from '@nestjs/common';
import { StageService } from '../service/stage.service';

@Controller('stage')
export class StageController {
  constructor(private readonly service: StageService) {}

  @Get()
  getStage() {
    return this.service.getStage();
  }
}
