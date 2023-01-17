import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

export class DatabaseConfiguration implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {        
        return {        
            type: "mysql",
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT, 10) || 5432,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            entities: [__dirname + process.env.ENTITIES_PATH],
            synchronize: JSON.parse(process.env.DB_SYNCHRONIZE.toLowerCase()), //should be 'false' in production - otherwise you will lose production data.
        };
    }
}

