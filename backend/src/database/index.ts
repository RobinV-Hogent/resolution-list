import "reflect-metadata";
import { DataSource } from "typeorm";
import { Goal } from "../models/goal";
import { Snapshot } from "../models/snapshot";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "src/database/db.sqlite",
    synchronize: false,
    logging: true,
    entities: [Goal, Snapshot],
    migrations: ["src/database/migrations/*.ts"],
    migrationsRun: false,
    migrationsTableName: 'migrations',
    migrationsTransactionMode: 'all',
    subscribers: [],
});