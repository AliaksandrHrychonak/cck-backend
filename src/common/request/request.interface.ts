import { Request } from 'express';
import { IResult } from 'ua-parser-js';

// HARDCODE
interface IAuthApiPayload  {
  _id: string;
  key: string;
  name: string;
}

export interface IRequestApp extends Request {
    id?: string;
    timezone: string;
    timestamp: number;
    customLang: string[];
    apiKey?: IAuthApiPayload;
    apiVersion?: number;
    userAgent?: IResult;
    user?: Record<string, any>;
    __class: string;
    __function: string;
}