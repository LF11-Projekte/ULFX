require("dotenv").config();
import * as process from "node:process";
import { appDataSource } from "./dataSource";
import { createApp } from "./app";

appDataSource
	.initialize()
	.then(() => {
		console.log("Data Source has been initialized!");

		const serverPort: any = process.env.PORT || 3000;

		createApp().listen(serverPort, () => {
			console.log("Express is listening on port ", serverPort);
		});
	})
	.catch((err) => {
		console.error("Error during Data Source initialization", err);
	});
