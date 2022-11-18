import express, { Express, Request, Response } from 'express';
// import cors from "cors"
import dotenv from 'dotenv'
import userRoute from './route/user';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());



//Route
app.use("/api/v1/user", userRoute);

//base route
app.get("/", (req: Request, res: Response) => {
  res.send("Ahmad Responding from HTTP Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});