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
exports.ChannelService = void 0;
const ChannelEntry_1 = require("../db/entry/ChannelEntry");
const _BaseService_1 = require("./_BaseService");
const dataSource_1 = require("../dataSource");
class ChannelService extends _BaseService_1.BaseService {
    constructor() {
        super(dataSource_1.appDataSource.getRepository(ChannelEntry_1.ChannelEntry));
    }
    create(channelProps) {
        return __awaiter(this, void 0, void 0, function* () {
            let channel = this.repository.create(Object.assign({ creationDate: new Date(), updateDate: new Date() }, channelProps));
            channel = yield this.repository.save(channel);
            return channel;
        });
    }
}
exports.ChannelService = ChannelService;
//# sourceMappingURL=ChannelService.js.map