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
exports.PostService = void 0;
const PostEntry_1 = require("../db/entry/PostEntry");
const _BaseService_1 = require("./_BaseService");
const dataSource_1 = require("../dataSource");
const UserService_1 = require("./UserService");
const PublisherService_1 = require("./PublisherService");
class PostService extends _BaseService_1.BaseService {
    constructor() {
        super(dataSource_1.appDataSource.getRepository(PostEntry_1.PostEntry));
        this.userService = new UserService_1.UserService();
        this.publisherService = new PublisherService_1.PublisherService();
    }
    create(postProps) {
        return __awaiter(this, void 0, void 0, function* () {
            this.userService.checkEntriesExists(postProps.editorIds, "User");
            this.userService.checkEntryExists(postProps.creatorId, "User");
            this.publisherService.checkEntryExists(postProps.publisherId, "Publisher");
            let post = this.repository.create(Object.assign({ creationDate: new Date(), updateDate: new Date() }, postProps));
            post = yield this.repository.save(post);
            return post;
        });
    }
}
exports.PostService = PostService;
//# sourceMappingURL=PostService.js.map