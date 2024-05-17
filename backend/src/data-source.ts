import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "AppDataSource.db",
  entities: [ User ],
  synchronize: true,
  logging: true
});
