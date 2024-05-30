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
exports.Comment = exports.CommentReferenceType = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
var CommentReferenceType;
(function (CommentReferenceType) {
    CommentReferenceType[CommentReferenceType["COMMENT"] = 0] = "COMMENT";
    CommentReferenceType[CommentReferenceType["POST"] = 1] = "POST";
})(CommentReferenceType || (exports.CommentReferenceType = CommentReferenceType = {}));
let Comment = class Comment {
};
exports.Comment = Comment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Comment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => User_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", User_1.User)
], Comment.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Comment.prototype, "reference_type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Object, (obj) => obj.id),
    __metadata("design:type", Object)
], Comment.prototype, "reference", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Comment.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Comment.prototype, "text", void 0);
exports.Comment = Comment = __decorate([
    (0, typeorm_1.Entity)()
], Comment);