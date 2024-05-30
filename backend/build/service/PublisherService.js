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
exports.PublisherService = void 0;
const _BaseService_1 = require("./_BaseService");
const dataSource_1 = require("../dataSource");
const PublisherEntry_1 = require("../db/entry/PublisherEntry");
const UserService_1 = require("./UserService");
const GroupService_1 = require("./GroupService");
const ChannelService_1 = require("./ChannelService");
class PublisherService extends _BaseService_1.BaseService {
    constructor() {
        super(dataSource_1.appDataSource.getRepository(PublisherEntry_1.PublisherEntry));
        this.userService = new UserService_1.UserService();
        this.groupService = new GroupService_1.GroupService();
        this.channelService = new ChannelService_1.ChannelService();
    }
    create(publisherProps) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (publisherProps.referenceType) {
                case "USER":
                    yield this.userService.checkEntryExists(publisherProps.referenceId, "User");
                    break;
                case "CHANNEL":
                    yield this.channelService.checkEntryExists(publisherProps.referenceId, "Channel");
                    break;
                case "GROUP":
                    yield this.groupService.checkEntryExists(publisherProps.referenceId, "Group");
                    break;
            }
            let publisher = this.repository.create(Object.assign({ creationDate: new Date(), updateDate: new Date() }, publisherProps));
            publisher = yield this.repository.save(publisher);
            return publisher;
        });
    }
}
exports.PublisherService = PublisherService;
//# sourceMappingURL=PublisherService.js.map