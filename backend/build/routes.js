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
exports.RegisterRoutes = void 0;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const UserController_1 = require("./controller/UserController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const SubscriptionController_1 = require("./controller/SubscriptionController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const ReactionController_1 = require("./controller/ReactionController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const PublisherController_1 = require("./controller/PublisherController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const PostController_1 = require("./controller/PostController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const GroupController_1 = require("./controller/GroupController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const CommentController_1 = require("./controller/CommentController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "IUser": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "creationDate": { "dataType": "datetime", "required": true },
            "updateDate": { "dataType": "datetime", "required": true },
            "email": { "dataType": "string", "required": true },
            "username": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IUser.email-or-username-or-description_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "email": { "dataType": "string", "required": true }, "username": { "dataType": "string", "required": true }, "description": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IUserProps": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_IUser.email-or-username-or-description_", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ISubscription": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "creationDate": { "dataType": "datetime", "required": true },
            "updateDate": { "dataType": "datetime", "required": true },
            "userId": { "dataType": "string", "required": true },
            "publisherId": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_ISubscription.userId-or-publisherId_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "userId": { "dataType": "string", "required": true }, "publisherId": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ISubscriptionProps": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_ISubscription.userId-or-publisherId_", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IReaction": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "creationDate": { "dataType": "datetime", "required": true },
            "updateDate": { "dataType": "datetime", "required": true },
            "userId": { "dataType": "string", "required": true },
            "referenceId": { "dataType": "string", "required": true },
            "referenceType": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["COMMENT"] }, { "dataType": "enum", "enums": ["POST"] }], "required": true },
            "reactionType": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["LIKE"] }, { "dataType": "enum", "enums": ["DISLIKE"] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IReaction.userId-or-referenceId-or-referenceType-or-reactionType_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "userId": { "dataType": "string", "required": true }, "referenceId": { "dataType": "string", "required": true }, "referenceType": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["COMMENT"] }, { "dataType": "enum", "enums": ["POST"] }], "required": true }, "reactionType": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["LIKE"] }, { "dataType": "enum", "enums": ["DISLIKE"] }], "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IReactionProps": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_IReaction.userId-or-referenceId-or-referenceType-or-reactionType_", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPublisher": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "creationDate": { "dataType": "datetime", "required": true },
            "updateDate": { "dataType": "datetime", "required": true },
            "referenceId": { "dataType": "string", "required": true },
            "referenceType": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["USER"] }, { "dataType": "enum", "enums": ["GROUP"] }, { "dataType": "enum", "enums": ["CHANNEL"] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IPublisher.referenceId-or-referenceType_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "referenceId": { "dataType": "string", "required": true }, "referenceType": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["USER"] }, { "dataType": "enum", "enums": ["GROUP"] }, { "dataType": "enum", "enums": ["CHANNEL"] }], "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPublisherProps": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_IPublisher.referenceId-or-referenceType_", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPost": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "creationDate": { "dataType": "datetime", "required": true },
            "updateDate": { "dataType": "datetime", "required": true },
            "title": { "dataType": "string", "required": true },
            "publisherId": { "dataType": "string", "required": true },
            "creatorId": { "dataType": "string", "required": true },
            "editorIds": { "dataType": "array", "array": { "dataType": "string" }, "required": true },
            "images": { "dataType": "array", "array": { "dataType": "string" }, "required": true },
            "text": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IPost.title-or-publisherId-or-creatorId-or-editorIds-or-images-or-text_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "publisherId": { "dataType": "string", "required": true }, "title": { "dataType": "string", "required": true }, "creatorId": { "dataType": "string", "required": true }, "editorIds": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "images": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "text": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPostProps": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_IPost.title-or-publisherId-or-creatorId-or-editorIds-or-images-or-text_", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IGroup": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "creationDate": { "dataType": "datetime", "required": true },
            "updateDate": { "dataType": "datetime", "required": true },
            "name": { "dataType": "string", "required": true },
            "adminIds": { "dataType": "array", "array": { "dataType": "string" }, "required": true },
            "memberIds": { "dataType": "array", "array": { "dataType": "string" }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IGroup.name-or-adminIds-or-memberIds_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "name": { "dataType": "string", "required": true }, "adminIds": { "dataType": "array", "array": { "dataType": "string" }, "required": true }, "memberIds": { "dataType": "array", "array": { "dataType": "string" }, "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IGroupProps": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_IGroup.name-or-adminIds-or-memberIds_", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IComment": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "creationDate": { "dataType": "datetime", "required": true },
            "updateDate": { "dataType": "datetime", "required": true },
            "userId": { "dataType": "string", "required": true },
            "referenceId": { "dataType": "string", "required": true },
            "referenceType": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["COMMENT"] }, { "dataType": "enum", "enums": ["POST"] }], "required": true },
            "text": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_IComment.userId-or-referenceId-or-referenceType-or-text_": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "userId": { "dataType": "string", "required": true }, "referenceId": { "dataType": "string", "required": true }, "referenceType": { "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["COMMENT"] }, { "dataType": "enum", "enums": ["POST"] }], "required": true }, "text": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICommentProps": {
        "dataType": "refAlias",
        "type": { "ref": "Pick_IComment.userId-or-referenceId-or-referenceType-or-text_", "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.get('/api/User/:userId', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.get)), function UserController_get(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new UserController_1.UserController();
                yield templateService.apiHandler({
                    methodName: 'get',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/User', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.getAll)), function UserController_getAll(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {};
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new UserController_1.UserController();
                yield templateService.apiHandler({
                    methodName: 'getAll',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/api/User/create', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.create)), function UserController_create(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                body: { "in": "body", "name": "body", "required": true, "ref": "IUserProps" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new UserController_1.UserController();
                yield templateService.apiHandler({
                    methodName: 'create',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/api/User/:userId', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.delete)), function UserController_delete(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                userId: { "in": "path", "name": "userId", "required": true, "dataType": "string" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new UserController_1.UserController();
                yield templateService.apiHandler({
                    methodName: 'delete',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/Subscription/:subscriptionId', ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController.prototype.get)), function SubscriptionController_get(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                subscriptionId: { "in": "path", "name": "subscriptionId", "required": true, "dataType": "string" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new SubscriptionController_1.SubscriptionController();
                yield templateService.apiHandler({
                    methodName: 'get',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/Subscription', ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController.prototype.getAll)), function SubscriptionController_getAll(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {};
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new SubscriptionController_1.SubscriptionController();
                yield templateService.apiHandler({
                    methodName: 'getAll',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/api/Subscription/create', ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController.prototype.create)), function SubscriptionController_create(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                body: { "in": "body", "name": "body", "required": true, "ref": "ISubscriptionProps" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new SubscriptionController_1.SubscriptionController();
                yield templateService.apiHandler({
                    methodName: 'create',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/api/Subscription/:subscriptionId', ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController.prototype.delete)), function SubscriptionController_delete(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                subscriptionId: { "in": "path", "name": "subscriptionId", "required": true, "dataType": "string" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new SubscriptionController_1.SubscriptionController();
                yield templateService.apiHandler({
                    methodName: 'delete',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/Reaction/:reactionId', ...((0, runtime_1.fetchMiddlewares)(ReactionController_1.ReactionController)), ...((0, runtime_1.fetchMiddlewares)(ReactionController_1.ReactionController.prototype.get)), function ReactionController_get(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                reactionId: { "in": "path", "name": "reactionId", "required": true, "dataType": "string" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new ReactionController_1.ReactionController();
                yield templateService.apiHandler({
                    methodName: 'get',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/Reaction/:referenceType/:referenceId', ...((0, runtime_1.fetchMiddlewares)(ReactionController_1.ReactionController)), ...((0, runtime_1.fetchMiddlewares)(ReactionController_1.ReactionController.prototype.getCountOf)), function ReactionController_getCountOf(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                referenceType: { "in": "path", "name": "referenceType", "required": true, "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["COMMENT"] }, { "dataType": "enum", "enums": ["POST"] }] },
                referenceId: { "in": "path", "name": "referenceId", "required": true, "dataType": "string" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new ReactionController_1.ReactionController();
                yield templateService.apiHandler({
                    methodName: 'getCountOf',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/Reaction', ...((0, runtime_1.fetchMiddlewares)(ReactionController_1.ReactionController)), ...((0, runtime_1.fetchMiddlewares)(ReactionController_1.ReactionController.prototype.getAll)), function ReactionController_getAll(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {};
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new ReactionController_1.ReactionController();
                yield templateService.apiHandler({
                    methodName: 'getAll',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/Reaction/:referenceType/all', ...((0, runtime_1.fetchMiddlewares)(ReactionController_1.ReactionController)), ...((0, runtime_1.fetchMiddlewares)(ReactionController_1.ReactionController.prototype.getAllOfType)), function ReactionController_getAllOfType(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                referenceType: { "in": "path", "name": "referenceType", "required": true, "dataType": "union", "subSchemas": [{ "dataType": "enum", "enums": ["POST"] }, { "dataType": "enum", "enums": ["COMMENT"] }] },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new ReactionController_1.ReactionController();
                yield templateService.apiHandler({
                    methodName: 'getAllOfType',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/api/Reaction/create', ...((0, runtime_1.fetchMiddlewares)(ReactionController_1.ReactionController)), ...((0, runtime_1.fetchMiddlewares)(ReactionController_1.ReactionController.prototype.create)), function ReactionController_create(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                body: { "in": "body", "name": "body", "required": true, "ref": "IReactionProps" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new ReactionController_1.ReactionController();
                yield templateService.apiHandler({
                    methodName: 'create',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/api/Reaction/:reactionId', ...((0, runtime_1.fetchMiddlewares)(ReactionController_1.ReactionController)), ...((0, runtime_1.fetchMiddlewares)(ReactionController_1.ReactionController.prototype.delete)), function ReactionController_delete(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                reactionId: { "in": "path", "name": "reactionId", "required": true, "dataType": "string" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new ReactionController_1.ReactionController();
                yield templateService.apiHandler({
                    methodName: 'delete',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/Publisher/:publisherId', ...((0, runtime_1.fetchMiddlewares)(PublisherController_1.PublisherController)), ...((0, runtime_1.fetchMiddlewares)(PublisherController_1.PublisherController.prototype.get)), function PublisherController_get(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                publisherId: { "in": "path", "name": "publisherId", "required": true, "dataType": "string" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PublisherController_1.PublisherController();
                yield templateService.apiHandler({
                    methodName: 'get',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/Publisher', ...((0, runtime_1.fetchMiddlewares)(PublisherController_1.PublisherController)), ...((0, runtime_1.fetchMiddlewares)(PublisherController_1.PublisherController.prototype.getAll)), function PublisherController_getAll(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {};
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PublisherController_1.PublisherController();
                yield templateService.apiHandler({
                    methodName: 'getAll',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/api/Publisher/create', ...((0, runtime_1.fetchMiddlewares)(PublisherController_1.PublisherController)), ...((0, runtime_1.fetchMiddlewares)(PublisherController_1.PublisherController.prototype.create)), function PublisherController_create(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                body: { "in": "body", "name": "body", "required": true, "ref": "IPublisherProps" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PublisherController_1.PublisherController();
                yield templateService.apiHandler({
                    methodName: 'create',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/api/Publisher/:publisherId', ...((0, runtime_1.fetchMiddlewares)(PublisherController_1.PublisherController)), ...((0, runtime_1.fetchMiddlewares)(PublisherController_1.PublisherController.prototype.delete)), function PublisherController_delete(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                publisherId: { "in": "path", "name": "publisherId", "required": true, "dataType": "string" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PublisherController_1.PublisherController();
                yield templateService.apiHandler({
                    methodName: 'delete',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/Post/:postId', ...((0, runtime_1.fetchMiddlewares)(PostController_1.PostController)), ...((0, runtime_1.fetchMiddlewares)(PostController_1.PostController.prototype.get)), function PostController_get(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                postId: { "in": "path", "name": "postId", "required": true, "dataType": "string" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PostController_1.PostController();
                yield templateService.apiHandler({
                    methodName: 'get',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/Post', ...((0, runtime_1.fetchMiddlewares)(PostController_1.PostController)), ...((0, runtime_1.fetchMiddlewares)(PostController_1.PostController.prototype.getAll)), function PostController_getAll(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {};
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PostController_1.PostController();
                yield templateService.apiHandler({
                    methodName: 'getAll',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/api/Post/create', ...((0, runtime_1.fetchMiddlewares)(PostController_1.PostController)), ...((0, runtime_1.fetchMiddlewares)(PostController_1.PostController.prototype.create)), function PostController_create(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                body: { "in": "body", "name": "body", "required": true, "ref": "IPostProps" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PostController_1.PostController();
                yield templateService.apiHandler({
                    methodName: 'create',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/api/Post/:postId', ...((0, runtime_1.fetchMiddlewares)(PostController_1.PostController)), ...((0, runtime_1.fetchMiddlewares)(PostController_1.PostController.prototype.delete)), function PostController_delete(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                postId: { "in": "path", "name": "postId", "required": true, "dataType": "string" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new PostController_1.PostController();
                yield templateService.apiHandler({
                    methodName: 'delete',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/Group/:groupId', ...((0, runtime_1.fetchMiddlewares)(GroupController_1.GroupController)), ...((0, runtime_1.fetchMiddlewares)(GroupController_1.GroupController.prototype.get)), function GroupController_get(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                groupId: { "in": "path", "name": "groupId", "required": true, "dataType": "string" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new GroupController_1.GroupController();
                yield templateService.apiHandler({
                    methodName: 'get',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/Group', ...((0, runtime_1.fetchMiddlewares)(GroupController_1.GroupController)), ...((0, runtime_1.fetchMiddlewares)(GroupController_1.GroupController.prototype.getAll)), function GroupController_getAll(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {};
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new GroupController_1.GroupController();
                yield templateService.apiHandler({
                    methodName: 'getAll',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/api/Group/create', ...((0, runtime_1.fetchMiddlewares)(GroupController_1.GroupController)), ...((0, runtime_1.fetchMiddlewares)(GroupController_1.GroupController.prototype.create)), function GroupController_create(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                body: { "in": "body", "name": "body", "required": true, "ref": "IGroupProps" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new GroupController_1.GroupController();
                yield templateService.apiHandler({
                    methodName: 'create',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/api/Group/:groupId', ...((0, runtime_1.fetchMiddlewares)(GroupController_1.GroupController)), ...((0, runtime_1.fetchMiddlewares)(GroupController_1.GroupController.prototype.delete)), function GroupController_delete(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                groupId: { "in": "path", "name": "groupId", "required": true, "dataType": "string" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new GroupController_1.GroupController();
                yield templateService.apiHandler({
                    methodName: 'delete',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/Comment/:postCommentId', ...((0, runtime_1.fetchMiddlewares)(CommentController_1.PostCommentController)), ...((0, runtime_1.fetchMiddlewares)(CommentController_1.PostCommentController.prototype.get)), function PostCommentController_get(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                postCommentId: { "in": "path", "name": "postCommentId", "required": true, "dataType": "string" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new CommentController_1.PostCommentController();
                yield templateService.apiHandler({
                    methodName: 'get',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/api/Comment', ...((0, runtime_1.fetchMiddlewares)(CommentController_1.PostCommentController)), ...((0, runtime_1.fetchMiddlewares)(CommentController_1.PostCommentController.prototype.getAll)), function PostCommentController_getAll(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {};
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new CommentController_1.PostCommentController();
                yield templateService.apiHandler({
                    methodName: 'getAll',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/api/Comment/create', ...((0, runtime_1.fetchMiddlewares)(CommentController_1.PostCommentController)), ...((0, runtime_1.fetchMiddlewares)(CommentController_1.PostCommentController.prototype.create)), function PostCommentController_create(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                body: { "in": "body", "name": "body", "required": true, "ref": "ICommentProps" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new CommentController_1.PostCommentController();
                yield templateService.apiHandler({
                    methodName: 'create',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/api/Comment/:postCommentId', ...((0, runtime_1.fetchMiddlewares)(CommentController_1.PostCommentController)), ...((0, runtime_1.fetchMiddlewares)(CommentController_1.PostCommentController.prototype.delete)), function PostCommentController_delete(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                postCommentId: { "in": "path", "name": "postCommentId", "required": true, "dataType": "string" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new CommentController_1.PostCommentController();
                yield templateService.apiHandler({
                    methodName: 'delete',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
exports.RegisterRoutes = RegisterRoutes;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
//# sourceMappingURL=routes.js.map