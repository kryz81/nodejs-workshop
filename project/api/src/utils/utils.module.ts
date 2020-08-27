import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { FileSystemService } from './filesystem.service';
import { GenerateIdService } from './generateid.service';

@Module({
  providers: [GenerateIdService, EventService, FileSystemService],
  exports: [GenerateIdService, EventService, FileSystemService],
})
export class UtilsModule {}
