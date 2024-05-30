"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionService = void 0;
const ReactionEntry_1 = require("../db/entry/ReactionEntry");
const _BaseService_1 = require("./_BaseService");
const dataSource_1 = require("../dataSource");
const UserService_1 = require("./UserService");
const PostService_1 = require("./PostService");
const CommentService_1 = require("./CommentService");
class ReactionService extends _BaseService_1.BaseService {
    constructor() {
        super(dataSource_1.appDataSource.getRepository(ReactionEntry_1.ReactionEntry));
        this.userService = new UserService_1.UserService();
        this.postService = new PostService_1.PostService();
        this.commentService = new CommentService_1.CommentService();
    }
    create(reactionProps) {
        return __awaiter(this, void 0, void 0, function* () {
            if (reactionProps.referenceType == "COMMENT")
                yield this.commentService.checkEntryExists(reactionProps.referenceId, "Comment");
            else
                yield this.postService.checkEntryExists(reactionProps.referenceId, "Post");
            yield this.userService.checkEntryExists(reactionProps.userId, "User");
            let reaction = this.repository.create(Object.assign({ creationDate: new Date(), updateDate: new Date() }, reactionProps));
            reaction = yield this.repository.save(reaction);
            return reaction;
        });
    }
    getAllOfType(referenceType) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.repository.find({ where: { referenceType: referenceType } });
            return !result.length ? "NOT_FOUND" : result;
        });
    }
    getReactionCountsOf(referenceType, referenceId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (referenceType == "POST")
                yield this.postService.checkEntryExists(referenceId, "Post");
            else
                yield this.commentService.checkEntryExists(referenceId, "Comment");
            const likeCount = yield this.repository.count({
                where: {
                    referenceId: referenceId,
                    referenceType: referenceType,
                    reactionType: "LIKE",
                },
            });
            const dislikeCount = yield this.repository.count({
                where: {
                    referenceId: referenceId,
                    referenceType: referenceType,
                    reactionType: "DISLIKE",
                },
            });
            return [likeCount, dislikeCount];
        });
    }
}
exports.ReactionService = ReactionService;
//# sourceMappingURL=ReactionService.js.map