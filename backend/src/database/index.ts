import "reflect-metadata";
import { DataSource } from "typeorm";
import { Resolution } from "../models/resolution";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "src/database/db.sqlite",
    synchronize: false,
    logging: true,
    entities: ["src/models/**/*.ts"],
    migrations: ["src/database/migrations/*.ts"],
    migrationsRun: false,
    migrationsTableName: 'migrations',
    migrationsTransactionMode: 'all',
    subscribers: [],
});