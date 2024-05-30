import express, { Express, Request, Response } from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./routes";
import cookieParser from "cookie-parser";
import session from "express-session";

export function createApp(): Express {
	const app: Express = express();

	app.use(cookieParser());
	app.use(session({ secret: Math.random().toString() }));

	app.use(cors());
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());

	app.use("/api-doc", swaggerUi.serve, async (_: Request, res: Response) =>
		res.send(swaggerUi.generateHTML(await import("./swagger.json"))),
	);

	RegisterRoutes(app);

	return app;
}
