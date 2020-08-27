import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { GenerateIdService } from './generateid.service';

@Module({
  providers: [GenerateIdService, EventService],
  exports: [GenerateIdService, EventService],
})
export class UtilsModule {}
