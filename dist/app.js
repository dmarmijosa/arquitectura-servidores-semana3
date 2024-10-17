"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_route_1 = __importDefault(require("./routes/post.route"));
const app = (0, express_1.default)();
// Middleware para parsear JSON
app.use(express_1.default.json());
// Rutas para los Posts
app.use('/api/posts', post_route_1.default);
exports.default = app;
