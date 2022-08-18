import { Module } from '@nestjs/common';
import { AuthModule } from 'src/common/auth/auth.module';
import { PermissionModule } from 'src/modules/permission/permission.module';
import { RoleModule } from 'src/modules/role/role.module';
@Module({
    controllers: [],
    providers: [],
    exports: [],
    imports: [AuthModule, PermissionModule, RoleModule],
})
export class RoutesPublicModule {}