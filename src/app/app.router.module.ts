import { DynamicModule, Module } from '@nestjs/common';
@Module({})
export class AppRouterModule {
    static register(): DynamicModule {
        if (process.env.APP_HTTP_ON === 'true') {
            return {
                module: AppRouterModule,
                controllers: [],
                providers: [],
                exports: [],
                imports: [],
            };
        }

        return {
            module: AppRouterModule,
            providers: [],
            exports: [],
            controllers: [],
            imports: [],
        };
    }
}
