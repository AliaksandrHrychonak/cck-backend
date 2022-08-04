import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import Configs from 'src/config/index';
import { DebuggerModule } from 'src/debugger/debugger.module';
import { DebuggerOptionService } from 'src/debugger/service/debugger.option.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/database/database.constant';
import { DatabaseOptionsService } from 'src/database/service/database.options.service';
import { DatabaseModule } from 'src/database/database.module';
import { HelperModule } from 'src/helper/helper.module';
import { PaginationModule } from 'src/pagination/pagination.module';


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            load: Configs,
            ignoreEnvFile: false,
            isGlobal: true,
            cache: true,
            envFilePath: ['.env'],
        }),
        WinstonModule.forRootAsync({
            inject: [DebuggerOptionService],
            imports: [DebuggerModule],
            useFactory: (debuggerOptionsService: DebuggerOptionService) =>
                debuggerOptionsService.createLogger(),
        }),
        MongooseModule.forRootAsync({
            connectionName: DATABASE_CONNECTION_NAME,
            inject: [DatabaseOptionsService],
            imports: [DatabaseModule],
            useFactory: (databaseOptionsService: DatabaseOptionsService) =>
                databaseOptionsService.createMongooseOptions(),
        }),
        DebuggerModule,
        HelperModule,
        PaginationModule
        ],
})
export class CoreModule {}
