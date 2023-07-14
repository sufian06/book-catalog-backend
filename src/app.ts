import cors from "cors";
import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// testin
app.get("/", (req: Request, res: Response) => {
  res.send("Book Catalog Working Successfully!");
});

export default app;
