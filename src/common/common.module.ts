import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import Config from '../config'
import { MongooseModule } from '@nestjs/mongoose';
import { DebuggerModule } from './debugger/debugger.module';
import { DebuggerOptionService } from './debugger/service/debugger.option.service';
import { DatabaseOptionsService } from 'src/common/database/service/database.options.service';
import { DATABASE_CONNECTION_NAME } from './database/database.constant';
import { DatabaseOptionsModule } from './database/database.module';
import { PaginationModule } from './pagination/pagination.module';
import { HelperModule } from './helper/helper.module';
import { RequestModule } from './request/request.module';
import { SettingModule } from './setting/setting.module';

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
          imports: [DebuggerModule],
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
      DebuggerModule,
      PaginationModule,
      HelperModule,
      RequestModule,
      SettingModule,
    ],
})
export class CommonModule {}