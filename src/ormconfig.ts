import { DataSourceOptions } from "typeorm";
import { User } from "./entities/User";

const { DataSource, DataSourceOptions } = require("typeorm");

require("dotenv").config();

export const config: DataSourceOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? "5432"),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ["dist/entities/*.js"], 
  migrations: ["dist/migrations/*.js"], 
  synchronize: false,
};

export const dataSourceOption = new DataSource(config);

dataSourceOption
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err: any) => {
    console.error("Error during Data Source initialization", err);
  });
