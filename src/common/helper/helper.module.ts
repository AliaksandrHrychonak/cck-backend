import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { HelperArrayService } from './service/helper.array.service';
import { HelperDateService } from './service/helper.date.service';
import { HelperEncryptionService } from './service/helper.encryption.service';
import { HelperGeoService } from './service/helper.geo.service';
import { HelperHashService } from './service/helper.hash.service';
import { HelperNumberService } from './service/helper.number.service';
import { HelperService } from './service/helper.service';
import { HelperStringService } from './service/helper.string.service';

@Global()
@Module({
    controllers: [],
    providers: [
        HelperService,
        HelperNumberService,
        HelperDateService,
        HelperArrayService,
        HelperGeoService,
        HelperStringService,
        HelperHashService,
        HelperEncryptionService
    ],
    exports: [
        HelperService,
        HelperNumberService,
        HelperDateService,
        HelperArrayService,
        HelperGeoService,
        HelperStringService,
        HelperHashService,
        HelperEncryptionService
    ],
    imports: [
        JwtModule.registerAsync({
            inject: [ConfigService],
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get<string>(
                    'helper.jwt.defaultSecretKey'
                ),
                signOptions: {
                    expiresIn: configService.get<string>(
                        'helper.jwt.defaultExpirationTime'
                    ),
                },
            }),
        }),
    ],
})
export class HelperModule {}
