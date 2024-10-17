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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.getPostById = exports.getAllPosts = exports.createPost = void 0;
const post_model_1 = __importDefault(require("../models/post.model"));
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, text, author } = req.body;
        const post = new post_model_1.default({ title, text, author });
        const savedPost = yield post.save();
        res.status(201).json(savedPost);
    }
    catch (err) {
        res.status(400).json({ error: 'Invalid data provided' });
    }
});
exports.createPost = createPost;
const getAllPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield post_model_1.default.find();
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});
exports.getAllPosts = getAllPosts;
const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield post_model_1.default.findById(req.params.id);
        if (!post) {
            res.status(404).json({ error: 'Post not found' });
            return;
        }
        res.status(200).json(post);
    }
    catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});
exports.getPostById = getPostById;
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield post_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) {
            res.status(404).json({ error: 'Post not found' });
            return;
        }
        res.status(200).json(post);
    }
    catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});
exports.updatePost = updatePost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield post_model_1.default.findByIdAndDelete(req.params.id);
        if (!post) {
            res.status(404).json({ error: 'Post not found' });
            return;
        }
        res.status(204).send();
    }
    catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});
exports.deletePost = deletePost;
