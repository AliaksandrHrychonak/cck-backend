import { Global, Module } from '@nestjs/common';
import { HelperDateService } from './service/helper.date.service';
import { HelperNumberService } from './service/helper.number.service';
import { HelperService } from './service/helper.service';


@Global()
@Module({
  controllers: [],
  providers: [HelperService, HelperNumberService, HelperDateService],
  exports: [HelperService, HelperNumberService, HelperDateService],
  imports: []
})
export class HelperModule {}
