import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { AuthModule } from 'src/common/auth/auth.module';
import { CommonModule } from 'src/common/common.module';
import { AuthApiSeed } from './seeds/auth.api.seed';
import { SettingSeed } from './seeds/setting.seed';


@Module({
    imports: [
      CommonModule,
      CommandModule,
      AuthModule,
    ],
    providers: [
      SettingSeed,
      AuthApiSeed
    ],
    exports: [],
})
export class MigrationModule {}