import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

export class TestDatabaseConfiguration implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type: "better-sqlite3",
            database: process.env.DB_SQLITE_FILEPATH,
            entities: [__dirname + process.env.ENTITIES_PATH],
            synchronize: JSON.parse(process.env.DB_SYNCHRONIZE.toLowerCase())
        };
    }
}