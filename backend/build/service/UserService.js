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
exports.UserService = void 0;
const UserEntry_1 = require("../db/entry/UserEntry");
const _BaseService_1 = require("./_BaseService");
const dataSource_1 = require("../dataSource");
class UserService extends _BaseService_1.BaseService {
    constructor() {
        super(dataSource_1.appDataSource.getRepository(UserEntry_1.UserEntry));
    }
    create(userProps) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = this.repository.create(Object.assign({ creationDate: new Date(), updateDate: new Date() }, userProps));
            user = yield this.repository.save(user);
            return user;
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map