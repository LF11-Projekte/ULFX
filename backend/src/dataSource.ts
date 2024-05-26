import {DataSource} from 'typeorm';
import * as process from "node:process";

export const appDataSource = new DataSource({
    type: "sqlite",
    database: process.env.DB_NAME || "sqlite.db",
    entities: [ ],
    synchronize: true,
    logging: true
});