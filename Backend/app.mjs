import express from "express";
const app = express();
import cors from "cors";
import userRoute from "./route/users.mjs";
app.use(cors());
app.options("*", cors());

app.use(express.json());

//Route
app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
  res.send("Ahmad Responding from HTTP Server");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
