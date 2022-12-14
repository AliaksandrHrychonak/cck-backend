import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { AppRouterModule } from './app.router.module';
@Module({
    controllers: [],
    providers: [],
    imports: [
        CoreModule,

        AppRouterModule.register(),
    ],
})
export class AppModule {}
