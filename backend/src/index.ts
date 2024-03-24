import express, { Express, Request, Response } from "express";
import { Router } from "./Router";

import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

const app: Express = express();
const port = 8000;

app.use("/api", Router)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Express is listening on port ", port);
});
