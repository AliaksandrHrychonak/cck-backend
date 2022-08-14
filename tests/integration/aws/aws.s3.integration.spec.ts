import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { INTEGRATION_AWS_URL } from './aws.s3.constant';
import request from 'supertest';
import { faker } from '@faker-js/faker';
import { TerminusModule } from '@nestjs/terminus';
import { CommonModule } from 'src/common/common.module';
import { HealthModule } from 'src/health/health.module';
import { HealthController } from 'src/health/controllers/health.controller';

describe('Aws S3 Integration', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [CommonModule, HealthModule, TerminusModule],
            controllers: [HealthController],
        }).compile();

        app = moduleRef.createNestApplication();
        await app.init();
    });

    it(`GET ${INTEGRATION_AWS_URL} Success`, async () => {
        const response = await request(app.getHttpServer())
            .get(INTEGRATION_AWS_URL)
            .set('user-agent', faker.internet.userAgent())

        expect(response.status).toEqual(HttpStatus.OK);
        expect(response.body.statusCode).toEqual(HttpStatus.OK);

        return;
    });

    afterAll(async () => {
        await app.close();
    });
});