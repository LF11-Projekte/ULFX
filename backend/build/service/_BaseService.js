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
exports.BaseService = void 0;
class BaseService {
    constructor(repo) {
        this.repository = repo;
    }
    checkEntryExists(id, entryName) {
        return __awaiter(this, void 0, void 0, function* () {
            const entry = yield this.getById(id);
            if (entry === "NOT_FOUND")
                throw Error(`NOT_FOUND (Entry with id ${id} in ${entryName})`);
        });
    }
    checkEntriesExists(ids, entryName) {
        return __awaiter(this, void 0, void 0, function* () {
            const entry = yield this.getByIds(ids);
            if (entry === "NOT_FOUND")
                throw Error(`NOT_FOUND (Entries with id ${ids} in ${entryName})`);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.repository.findOneBy({ id: id });
            return !result ? "NOT_FOUND" : result;
        });
    }
    getByIds(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const objects = new Array();
            for (const id of ids) {
                const obj = yield this.repository.findOneBy({ id: id });
                if (obj)
                    objects.push(obj);
            }
            for (const id of ids) {
                if (!objects.find((val) => {
                    val.id == id;
                }))
                    return "NOT_FOUND";
            }
            return objects;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.repository.find();
            return !result.length ? "NOT_FOUND" : result;
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const obj = yield this.getById(id);
            if (obj === "NOT_FOUND") {
                return false;
            }
            const result = yield this.repository.delete({ id: id });
            return !result.affected;
        });
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=_BaseService.js.map