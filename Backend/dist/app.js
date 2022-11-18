"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from "cors"
const dotenv_1 = __importDefault(require("dotenv"));
const user_1 = __importDefault(require("./route/user"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
//Route
app.use("/api/v1/user", user_1.default);
//base route
app.get("/", (req, res) => {
    res.send("Ahmad Responding from HTTP Server");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
