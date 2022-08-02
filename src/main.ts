import { NestApplication, NestFactory } from '@nestjs/core';
import { Logger, VersioningType, VERSION_NEUTRAL } from '@nestjs/common';
import { AppModule } from 'src/app/app.module';
import { ConfigService } from '@nestjs/config';
import { useContainer } from 'class-validator';

async function bootstrap() {
    const app: NestApplication = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    const env: string = configService.get<string>('app.env');
    const host: string = configService.get<string>('app.http.host');
    const port: number = configService.get<number>('app.http.port');
    const globalPrefix: string = configService.get<string>('app.globalPrefix');
    const versioning: boolean = configService.get<boolean>('app.versioning.on');
    const versioningPrefix: string = configService.get<string>(
        'app.versioning.prefix'
    );

    const logger = new Logger();
    process.env.NODE_ENV = env;

    app.setGlobalPrefix(globalPrefix);
    useContainer(app.select(AppModule), { fallbackOnErrors: true });

    if (versioning) {
        app.enableVersioning({
            type: VersioningType.URI,
            defaultVersion: VERSION_NEUTRAL,
            prefix: versioningPrefix,
        });
    }

    await app.listen(port, host);
    logger.log(`App Mode is ${env}`, 'NestApplication');
    logger.log(`Server running on ${await app.getUrl()}`, 'NestApplication');
}
bootstrap();
