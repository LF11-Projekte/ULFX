import express, { Express, Request, Response } from "express";

import { AppDataSource } from "./data-source";

const app: Express = express();
const port = 8000;

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Express is listening on port ", port);
});

