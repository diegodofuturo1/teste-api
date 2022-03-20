import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StageModule } from './stage/module/stage.module';

@Module({
  imports: [StageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
