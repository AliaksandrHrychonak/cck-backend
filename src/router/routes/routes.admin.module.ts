import { Module } from '@nestjs/common';
import { AuthModule } from 'src/common/auth/auth.module';
import { SettingAdminController } from 'src/common/setting/controllers/setting.admin.controller';
import { PermissionAdminController } from 'src/modules/permission/controllers/permission.admin.controller';
import { PermissionModule } from 'src/modules/permission/permission.module';
import { RoleAdminController } from 'src/modules/role/controllers/role.admin.controller';
import { RoleModule } from 'src/modules/role/role.module';
@Module({
    controllers: [
        SettingAdminController,
        PermissionAdminController,
        RoleAdminController
    ],
    providers: [],
    exports: [],
    imports: [AuthModule, PermissionModule, RoleModule],
})
export class RoutesAdminModule {}