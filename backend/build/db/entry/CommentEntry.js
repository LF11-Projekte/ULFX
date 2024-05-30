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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentEntry = void 0;
const _BaseEntry_1 = require("./_BaseEntry");
const typeorm_1 = require("typeorm");
let CommentEntry = class CommentEntry extends _BaseEntry_1.BaseEntry {
};
exports.CommentEntry = CommentEntry;
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: "uuid",
        unique: false,
    }),
    __metadata("design:type", String)
], CommentEntry.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: "uuid",
        unique: false,
    }),
    __metadata("design:type", String)
], CommentEntry.prototype, "referenceId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: "text",
    }),
    __metadata("design:type", String)
], CommentEntry.prototype, "referenceType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: "text",
        unique: false,
    }),
    __metadata("design:type", String)
], CommentEntry.prototype, "text", void 0);
exports.CommentEntry = CommentEntry = __decorate([
    (0, typeorm_1.Entity)("Comment")
], CommentEntry);
//# sourceMappingURL=CommentEntry.js.map