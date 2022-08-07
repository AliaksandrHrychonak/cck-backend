import { Global, Module } from '@nestjs/common';
import { HelperArrayService } from './service/helper.array.service';
import { HelperDateService } from './service/helper.date.service';
import { HelperGeoService } from './service/helper.geo.service';
import { HelperNumberService } from './service/helper.number.service';
import { HelperService } from './service/helper.service';

@Global()
@Module({
    controllers: [],
    providers: [
        HelperService,
        HelperNumberService,
        HelperDateService,
        HelperArrayService,
        HelperGeoService,
    ],
    exports: [
        HelperService,
        HelperNumberService,
        HelperDateService,
        HelperArrayService,
        HelperGeoService,
    ],
    imports: [],
})
export class HelperModule {}
