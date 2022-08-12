import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { SettingController } from "src/common/setting/controllers/setting.controller";
@Module({
    controllers: [
        SettingController
    ],
    providers: [],
    exports: [],
    imports: [
        TerminusModule,
        HttpModule,
    ],
})
export class RoutesModule {}