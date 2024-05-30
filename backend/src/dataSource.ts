import { DataSource } from "typeorm";
import * as process from "node:process";
import { UserEntry } from "./db/entry/UserEntry";
import { SubscriptionEntry } from "./db/entry/SubscriptionEntry";
import { PublisherEntry } from "./db/entry/PublisherEntry";
import { PostEntry } from "./db/entry/PostEntry";
import { GroupEntry } from "./db/entry/GroupEntry";
import { CommentEntry } from "./db/entry/CommentEntry";
import { ChannelEntry } from "./db/entry/ChannelEntry";
import { ReactionEntry } from "./db/entry/ReactionEntry";

export const appDataSource = new DataSource({
	type: "sqlite",
	database: process.env.DB_NAME || "sqlite.db",
	entities: [
		UserEntry,
		SubscriptionEntry,
		PublisherEntry,
		PostEntry,
		GroupEntry,
		CommentEntry,
		ReactionEntry,
		ChannelEntry,
	],
	synchronize: true,
	logging: true,
});
