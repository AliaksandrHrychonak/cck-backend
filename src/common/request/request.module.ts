import {
  HttpStatus,
  Module,
  UnprocessableEntityException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ENUM_REQUEST_STATUS_CODE_ERROR } from './request.constant';
import { MinGreaterThanConstraint } from './validations/request.min-greater-than.validation';
import { SkipConstraint } from './validations/request.skip.validation';


@Module({
  controllers: [],
  providers: [
      {
          provide: APP_PIPE,
          useFactory: () =>
              new ValidationPipe({
                  transform: true,
                  skipNullProperties: false,
                  skipUndefinedProperties: false,
                  skipMissingProperties: false,
                  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
                  exceptionFactory: async (errors: ValidationError[]) =>
                      new UnprocessableEntityException({
                          statusCode:
                              ENUM_REQUEST_STATUS_CODE_ERROR.REQUEST_VALIDATION_ERROR,
                          message: 'http.clientError.unprocessableEntity',
                          errors,
                      }),
              }),
      },
      MinGreaterThanConstraint,
      SkipConstraint,
  ],
  imports: [],
})
export class RequestModule {}