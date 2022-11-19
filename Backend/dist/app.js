"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); // here is one error in cors
// const cors = require('cors')
const dotenv_1 = __importDefault(require("dotenv"));
const user_1 = __importDefault(require("./route/user"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.options("*", (0, cors_1.default)());
app.use(express_1.default.json());
//Route
app.use("/api/v1/user", user_1.default);
//base route
app.get("/", (req, res) => {
    res.send("Ahmad Responding from HTTP Server");
    console.log('====================================');
    console.log('Ahmad this api is working');
    console.log('====================================');
});
// // Add a list of allowed origins.
// // If you have more origins you would like to add, you can add them to the array below.
// const allowedOrigins = [`http://localhost:${port}`];
// const options: cors.CorsOptions = {
//   origin: allowedOrigins
// };
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
