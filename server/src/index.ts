import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";

dotenv.config();
console.log('hi')
const PORT = process.env.PORT as String;
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ data: "hi nidhal 2" });
});

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
