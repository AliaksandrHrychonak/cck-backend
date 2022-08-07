import { Global, Module } from '@nestjs/common';
import { HelperArrayService } from './service/helper.array.service';
import { HelperDateService } from './service/helper.date.service';
import { HelperGeoService } from './service/helper.geo.service';
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
        HelperStringService
    ],
    exports: [
        HelperService,
        HelperNumberService,
        HelperDateService,
        HelperArrayService,
        HelperGeoService,
        HelperStringService
    ],
    imports: [],
})
export class HelperModule {}
