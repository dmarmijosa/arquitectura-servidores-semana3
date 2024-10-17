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
exports.disconnectDb = exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const uri = 'mongodb://localhost:27017/posts-api'; // Asegúrate de tener MongoDB corriendo en localhost
    try {
        yield mongoose_1.default.connect(uri);
        console.log('Connected to MongoDB Database');
    }
    catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
});
exports.connectDB = connectDB;
const disconnectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connection.close();
        console.log("Database disconnected successfully.");
    }
    catch (error) {
        console.error("Error disconnecting the database: ", error);
    }
});
exports.disconnectDb = disconnectDb;
