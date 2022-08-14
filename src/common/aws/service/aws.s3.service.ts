import {
  S3Client,
  ListBucketsCommand,
} from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AwsS3Service {
  private readonly s3Client: S3Client;
  private readonly bucket: string;
  private readonly baseUrl: string;

  constructor(private readonly configService: ConfigService) {
      this.s3Client = new S3Client({
          endpoint: this.configService.get<string>('aws.s3.endpoint'),
          credentials: {
              accessKeyId:
                  this.configService.get<string>('aws.credential.key'),
              secretAccessKey: this.configService.get<string>(
                  'aws.credential.secret'
              ),
          },
          region: this.configService.get<string>('aws.s3.region'),
      });

      this.bucket = this.configService.get<string>('aws.s3.bucket');
      this.baseUrl = this.configService.get<string>('aws.s3.baseUrl');
  }

  async listBucket(): Promise<string[]> {
      const command: ListBucketsCommand = new ListBucketsCommand({});
        
      try {
          const listBucket: Record<string, any> = await this.s3Client.send(
              command
          );
          const mapList = listBucket.Buckets.map(
              (val: Record<string, any>) => val.Name
          );

          return mapList;
      } catch (err: any) {
          throw err;
      }
  }

}