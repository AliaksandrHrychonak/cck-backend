import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { AuthModule } from 'src/common/auth/auth.module';
import { CommonModule } from 'src/common/common.module';
import { PermissionModule } from 'src/modules/permission/permission.module';
import { RoleModule } from 'src/modules/role/role.module';
import { AuthApiSeed } from './seeds/auth.api.seed';
import { PermissionSeed } from './seeds/permission.seed';
import { RoleSeed } from './seeds/role.seed';
import { SettingSeed } from './seeds/setting.seed';

@Module({
    imports: [
      CommonModule,
      CommandModule,
      AuthModule,
      PermissionModule,
      RoleModule
    ],
    providers: [
      SettingSeed,
      AuthApiSeed,
      PermissionSeed,
      RoleSeed
    ],
    exports: [],
})
export class MigrationModule {}