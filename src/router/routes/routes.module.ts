import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { AuthModule } from "src/common/auth/auth.module";
import { AwsModule } from "src/common/aws/aws.module";
import { SettingController } from "src/common/setting/controllers/setting.controller";
import { HealthController } from "src/health/controllers/health.controller";
import { HealthModule } from "src/health/health.module";
import { PermissionModule } from "src/modules/permission/permission.module";
import { RoleModule } from "src/modules/role/role.module";
@Module({
    controllers: [
        SettingController,
        HealthController,
    ],
    providers: [],
    exports: [],
    imports: [
        AwsModule,
        HealthModule,
        TerminusModule,
        HttpModule,
        AuthModule,
        PermissionModule,
        RoleModule
    ],
})
export class RoutesModule {}