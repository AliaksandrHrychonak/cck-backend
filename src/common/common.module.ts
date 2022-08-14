import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import Config from '../config'
import { MongooseModule } from '@nestjs/mongoose';
import { DebuggerModule, DebuggerOptionsModule } from './debugger/debugger.module';
import { DebuggerOptionService } from './debugger/service/debugger.option.service';
import { DatabaseOptionsService } from 'src/common/database/service/database.options.service';
import { DATABASE_CONNECTION_NAME } from './database/database.constant';
import { DatabaseOptionsModule } from './database/database.module';
import { PaginationModule } from './pagination/pagination.module';
import { HelperModule } from './helper/helper.module';
import { RequestModule } from './request/request.module';
import { SettingModule } from './setting/setting.module';
import { MessageModule } from './message/message.module';
import { ErrorModule } from './error/error.module';
import { LoggerModule } from './logger/logger.module';
import { ResponseModule } from './response/response.module';
import { MiddlewareModule } from './middleware/middleware.module';
import { AuthModule } from './auth/auth.module';
import { AwsModule } from './aws/aws.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
        ConfigModule.forRoot({
            load: Config,
            ignoreEnvFile: false,
            isGlobal: true,
            cache: true,
            envFilePath: ['.env'],
        }),
        WinstonModule.forRootAsync({
            inject: [DebuggerOptionService],
            imports: [DebuggerOptionsModule],
            useFactory: (debuggerOptionsService: DebuggerOptionService) =>
            debuggerOptionsService.createLogger(),
        }),
        MongooseModule.forRootAsync({
            connectionName: DATABASE_CONNECTION_NAME,
            inject: [DatabaseOptionsService],
            imports: [DatabaseOptionsModule],
            useFactory: (databaseOptionsService: DatabaseOptionsService) =>
                databaseOptionsService.createMongooseOptions(),
        }),
        MessageModule,
        HelperModule,
        PaginationModule,
        ErrorModule,
        LoggerModule,
        DebuggerModule,
        ResponseModule,
        RequestModule,
        MiddlewareModule,
        AuthModule,
        SettingModule
    ],
})
export class CommonModule {}