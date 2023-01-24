import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import contactRoute from "./routes/contact.route";

dotenv.config();
const PORT = process.env.PORT as String;
const app: Express = express();

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://192.168.1.15:3000",
  ],
  methods: "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS",
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ data: "hi nidhal 1" });
});

app.use('/api/contact', contactRoute);

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
