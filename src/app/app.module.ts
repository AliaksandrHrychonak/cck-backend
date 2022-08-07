import { Module } from '@nestjs/common';
import { JobsModule } from 'src/jobs/jobs.module';
import { AppController } from './controller/app.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
    controllers: [AppController],
    providers: [],
    imports: [
        CommonModule,

        JobsModule.register(),

    ],
})
export class AppModule {}