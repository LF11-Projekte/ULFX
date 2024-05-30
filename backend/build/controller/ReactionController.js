"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.ReactionController = void 0;
const tsoa_1 = require("tsoa");
const ReactionService_1 = require("../service/ReactionService");
let ReactionController = class ReactionController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.service = new ReactionService_1.ReactionService();
    }
    get(reactionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getById(reactionId);
        });
    }
    getCountOf(referenceType, referenceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const [likes, dislikes] = yield this.service.getReactionCountsOf(referenceType, referenceId);
            return { likes, dislikes };
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getAll();
        });
    }
    getAllOfType(referenceType) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getAllOfType(referenceType);
        });
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.create(body);
        });
    }
    delete(reactionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.deleteById(reactionId);
        });
    }
};
exports.ReactionController = ReactionController;
__decorate([
    (0, tsoa_1.Get)("{reactionId}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReactionController.prototype, "get", null);
__decorate([
    (0, tsoa_1.Get)("{referenceType}/{referenceId}"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ReactionController.prototype, "getCountOf", null);
__decorate([
    (0, tsoa_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReactionController.prototype, "getAll", null);
__decorate([
    (0, tsoa_1.Get)("{referenceType}/all"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReactionController.prototype, "getAllOfType", null);
__decorate([
    (0, tsoa_1.Post)("create"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReactionController.prototype, "create", null);
__decorate([
    (0, tsoa_1.Delete)("{reactionId}"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReactionController.prototype, "delete", null);
exports.ReactionController = ReactionController = __decorate([
    (0, tsoa_1.Route)("Reaction"),
    (0, tsoa_1.Tags)("Reaction")
], ReactionController);
//# sourceMappingURL=ReactionController.js.map