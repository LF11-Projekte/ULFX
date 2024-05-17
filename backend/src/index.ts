import express, { Express, Request, Response } from "express";
import Router from "./Router";
import { AppDataSource } from "./data-source";
import cookieParser from "cookie-parser";
import session from "express-session";
import swaggerUi from "swagger-ui-express";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

const app: Express = express();
const port = 8082;

app
  .use(cookieParser())
  .use(session({
    secret: "ganz tolles geheimnisssssss09784350ß13750"
  }))
  .use(express.json())
  .use(express.static("public"));


  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "/swagger.json",
      },
    })
  );

  app.use("/api", Router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Express is listening on port ", port);
});
