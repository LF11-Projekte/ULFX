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
exports.UserController = void 0;
const User_1 = require("../entities/User");
const data_source_1 = require("../data-source");
const tsoa_1 = require("tsoa");
const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
let UserController = class UserController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.createUser = (user) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield userRepository.save(user);
                return { success: true, status: "created" };
            }
            catch (ex) {
                return { success: false, status: ex.message };
            }
        });
        this.getUserById = (userId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userRepository.findOneBy({
                    id: userId
                });
                return user;
            }
            catch (ex) {
                return "not found";
            }
        });
    }
};
exports.UserController = UserController;
__decorate([
    (0, tsoa_1.Post)(),
    __metadata("design:type", Object)
], UserController.prototype, "createUser", void 0);
__decorate([
    (0, tsoa_1.Get)("{id}"),
    __metadata("design:type", Object)
], UserController.prototype, "getUserById", void 0);
exports.UserController = UserController = __decorate([
    (0, tsoa_1.Route)("User")
], UserController);
