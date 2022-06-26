import { Module } from '@nestjs/common';
import { DataModule } from './data.module';

@Module({
  imports: [DataModule],
  exports: [DataModule],
})
export class SharedModule {}
