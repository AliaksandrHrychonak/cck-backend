import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { CommonModule } from 'src/common/common.module';
import { SettingSeed } from './seeds/setting.seed';


@Module({
    imports: [
      CommonModule,
      CommandModule,
    ],
    providers: [
      SettingSeed
    ],
    exports: [],
})
export class MigrationModule {}