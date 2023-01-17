import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfiguration } from './database.configuration';
import { DbConfigModule } from './db-config.module';

describe('Database-Configuration', () => {
    let dbConfig: DatabaseConfiguration;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    envFilePath: `.${process.env.NODE_ENV}.env`
                }),
                DbConfigModule,
            ]
        }).compile();

        dbConfig = module.get<DatabaseConfiguration>(DatabaseConfiguration);
    });

    it('should be defined', () => {
        expect(dbConfig).toBeDefined();
    });

    it('should get card issuers array', async () => {
        let res = await dbConfig.createTypeOrmOptions();

        const expJson = {
            type: "mysql",
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT, 10) || 5432,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            entities: [__dirname + process.env.ENTITIES_PATH],
            synchronize: JSON.parse(process.env.DB_SYNCHRONIZE.toLowerCase())
        };
        expect(res).toStrictEqual(expJson);
    });
});
