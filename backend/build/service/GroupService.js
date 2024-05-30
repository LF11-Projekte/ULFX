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
exports.GroupService = void 0;
const GroupEntry_1 = require("../db/entry/GroupEntry");
const _BaseService_1 = require("./_BaseService");
const dataSource_1 = require("../dataSource");
class GroupService extends _BaseService_1.BaseService {
    constructor() {
        super(dataSource_1.appDataSource.getRepository(GroupEntry_1.GroupEntry));
    }
    create(groupProps) {
        return __awaiter(this, void 0, void 0, function* () {
            let group = this.repository.create(Object.assign({ creationDate: new Date(), updateDate: new Date() }, groupProps));
            group = yield this.repository.save(group);
            return group;
        });
    }
}
exports.GroupService = GroupService;
//# sourceMappingURL=GroupService.js.map