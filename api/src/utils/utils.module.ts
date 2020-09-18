import { Global, Module } from '@nestjs/common';
import { EventService } from './event.service';
import { FileSystemService } from './filesystem.service';
import { IdGeneratorService } from './idgenerator.service';

@Global()
@Module({
  providers: [IdGeneratorService, EventService, FileSystemService],
  exports: [IdGeneratorService, EventService, FileSystemService],
})
export class UtilsModule {}
