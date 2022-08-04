import { Global, Module } from '@nestjs/common';
import { HelperNumberService } from './service/helper.number.service';
import { HelperService } from './service/helper.service';


@Global()
@Module({
  
  controllers: [],
  providers: [HelperService, HelperNumberService],
  exports: [HelperService, HelperNumberService],
  imports: []
})
export class HelperModule {}
