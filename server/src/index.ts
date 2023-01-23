import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import contactRoute from "./routes/contact.route";

dotenv.config();
const PORT = process.env.PORT as String;
const app: Express = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ data: "hi nidhal 1" });
});

app.use('/api/contact', contactRoute);

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
