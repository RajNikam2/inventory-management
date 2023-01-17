import { Module } from '@nestjs/common';
import { DatabaseConfiguration } from './database.configuration';
import { TestDatabaseConfiguration } from './test-database.configuration';

@Module({
    controllers: [],
    providers: [DatabaseConfiguration, TestDatabaseConfiguration],
    exports: [DatabaseConfiguration, TestDatabaseConfiguration]
})
export class DbConfigModule { }