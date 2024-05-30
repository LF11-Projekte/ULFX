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
exports.CommentService = void 0;
const CommentEntry_1 = require("../db/entry/CommentEntry");
const _BaseService_1 = require("./_BaseService");
const dataSource_1 = require("../dataSource");
const PostService_1 = require("./PostService");
const UserService_1 = require("./UserService");
class CommentService extends _BaseService_1.BaseService {
    constructor() {
        super(dataSource_1.appDataSource.getRepository(CommentEntry_1.CommentEntry));
        this.postService = new PostService_1.PostService();
        this.userService = new UserService_1.UserService();
    }
    create(commentProps) {
        return __awaiter(this, void 0, void 0, function* () {
            if (commentProps.referenceType == "COMMENT")
                yield this.checkEntryExists(commentProps.referenceId, "Comment");
            else
                yield this.postService.checkEntryExists(commentProps.referenceId, "Post");
            yield this.userService.checkEntryExists(commentProps.userId, "User");
            let postComment = this.repository.create(Object.assign({ creationDate: new Date(), updateDate: new Date() }, commentProps));
            postComment = yield this.repository.save(postComment);
            return postComment;
        });
    }
}
exports.CommentService = CommentService;
//# sourceMappingURL=CommentService.js.map