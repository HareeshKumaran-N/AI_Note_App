import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import noteRouter from "./Notes/NoteRouter";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json())

//note route handler
app.use('/api/note',noteRouter)



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
