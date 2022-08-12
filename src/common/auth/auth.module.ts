import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from '../database/database.constant';

import {
    AuthApiDatabaseName,
    AuthApiEntity,
    AuthApiSchema,
} from './schemas/auth.api.schema';

@Module({
    providers: [

    ],
    exports: [],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: AuthApiEntity.name,
                    schema: AuthApiSchema,
                    collection: AuthApiDatabaseName,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class AuthModule {}