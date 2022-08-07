import { Module } from '@nestjs/common';
import { JobsModule } from 'src/jobs/jobs.module';
import { AppController } from './controller/app.controller';
import { CommonModule } from 'src/common/common.module';
import { RouterModule } from 'src/router/router.module';

@Module({
    controllers: [AppController],
    providers: [],
    imports: [
        CommonModule,

        JobsModule.register(),

        RouterModule.register()
    ],
})
export class AppModule {}