"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDataSource = void 0;
const typeorm_1 = require("typeorm");
const process = __importStar(require("node:process"));
const UserEntry_1 = require("./db/entry/UserEntry");
const SubscriptionEntry_1 = require("./db/entry/SubscriptionEntry");
const PublisherEntry_1 = require("./db/entry/PublisherEntry");
const PostEntry_1 = require("./db/entry/PostEntry");
const GroupEntry_1 = require("./db/entry/GroupEntry");
const CommentEntry_1 = require("./db/entry/CommentEntry");
const ChannelEntry_1 = require("./db/entry/ChannelEntry");
const ReactionEntry_1 = require("./db/entry/ReactionEntry");
exports.appDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: process.env.DB_NAME || "sqlite.db",
    entities: [
        UserEntry_1.UserEntry,
        SubscriptionEntry_1.SubscriptionEntry,
        PublisherEntry_1.PublisherEntry,
        PostEntry_1.PostEntry,
        GroupEntry_1.GroupEntry,
        CommentEntry_1.CommentEntry,
        ReactionEntry_1.ReactionEntry,
        ChannelEntry_1.ChannelEntry,
    ],
    synchronize: true,
    logging: true,
});
//# sourceMappingURL=dataSource.js.map