import { Module } from '@nestjs/common';
import { GenerateIdService } from './generateid.service';

@Module({
  providers: [GenerateIdService],
  exports: [GenerateIdService],
})
export class UtilsModule {}
