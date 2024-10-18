"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = require("../controllers/post.controller");
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const router = (0, express_1.Router)();
// Proteger las rutas de posts con el middleware de autenticación
router.post('/', auth_middleware_1.default, post_controller_1.createPost);
router.get('/', auth_middleware_1.default, post_controller_1.getAllPosts);
router.get('/:id', auth_middleware_1.default, post_controller_1.getPostById);
router.patch('/:id', auth_middleware_1.default, post_controller_1.updatePost);
router.delete('/:id', auth_middleware_1.default, post_controller_1.deletePost);
exports.default = router;
