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
exports.SubscriptionService = void 0;
const SubscriptionEntry_1 = require("../db/entry/SubscriptionEntry");
const _BaseService_1 = require("./_BaseService");
const dataSource_1 = require("../dataSource");
const UserService_1 = require("./UserService");
const PublisherService_1 = require("./PublisherService");
class SubscriptionService extends _BaseService_1.BaseService {
    constructor() {
        super(dataSource_1.appDataSource.getRepository(SubscriptionEntry_1.SubscriptionEntry));
        this.userService = new UserService_1.UserService();
        this.publisherService = new PublisherService_1.PublisherService();
    }
    create(subscriptionProps) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.getById(subscriptionProps.userId);
            const publisher = yield this.publisherService.getById(subscriptionProps.publisherId);
            if (!user)
                throw Error("USER_NOT_FOUND");
            if (!publisher)
                throw Error("PUBLISHER_NOT_FOUND");
            let subscription = this.repository.create(Object.assign({ creationDate: new Date(), updateDate: new Date() }, subscriptionProps));
            subscription = yield this.repository.save(subscription);
            return subscription;
        });
    }
}
exports.SubscriptionService = SubscriptionService;
//# sourceMappingURL=SubscriptionService.js.map