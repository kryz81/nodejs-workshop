import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { FileSystemService } from './filesystem.service';
import { GenerateIdService } from './generateid.service';
import { LoggerService } from './logger.service';

@Module({
  providers: [
    GenerateIdService,
    EventService,
    FileSystemService,
    LoggerService,
  ],
  exports: [GenerateIdService, EventService, FileSystemService, LoggerService],
})
export class UtilsModule {}
