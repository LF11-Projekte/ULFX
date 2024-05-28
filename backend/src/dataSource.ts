import {DataSource} from 'typeorm';
import * as process from "node:process";
import {UserEntry} from "./db/entry/UserEntry";
import {SubscriptionEntry} from "./db/entry/SubscriptionEntry";
import {PublisherEntry} from "./db/entry/PublisherEntry";
import {PostEntry} from "./db/entry/PostEntry";
import {GroupEntry} from "./db/entry/GroupEntry";
import {PostCommentEntry} from "./db/entry/PostCommentEntry";
import {ChannelEntry} from "./db/entry/ChannelEntry";
import {PostReactionEntry} from "./db/entry/PostReactionEntry";
import {CommentReactionEntry} from "./db/entry/CommentReactionEntry";

export const appDataSource = new DataSource({
    type: "sqlite",
    database: process.env.DB_NAME || "sqlite.db",
    entities: [ UserEntry, SubscriptionEntry, PublisherEntry, PostEntry, GroupEntry, PostReactionEntry, CommentReactionEntry, PostCommentEntry, ChannelEntry ],
    synchronize: true,
    logging: true
});