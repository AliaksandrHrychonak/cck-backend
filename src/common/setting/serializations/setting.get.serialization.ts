import { Type } from 'class-transformer';

export class SettingGetSerialization {
    @Type(() => String)
    readonly _id: string;

    readonly name: string;
    readonly description?: string;
    readonly value: string | number | boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}