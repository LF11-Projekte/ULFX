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
const UserEntity_1 = require("./UserEntity");
const data_source_1 = require("../data-source");
const userRepository = data_source_1.AppDataSource.getRepository(UserEntity_1.UserEntity);
class UserService {
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userRepository.findOneBy({ id: id });
        });
    }
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield userRepository.save(Object.assign({}, params));
            return response;
        });
    }
}
exports.UserService = UserService;
