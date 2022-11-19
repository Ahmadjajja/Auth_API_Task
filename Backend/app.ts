import express, { Express, Request, Response } from 'express';
import cors from "cors"; // here is one error in cors
// const cors = require('cors')
import dotenv from 'dotenv'
import userRoute from './route/user';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(cors());
app.options("*", cors());
app.use(express.json());


//Route
app.use("/api/v1/user", userRoute);

//base route
app.get("/", (req: Request, res: Response) => {
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