import { Request, Response, Router } from "express";
import { createNote } from "./NoteServices";
import { validator } from "../Midleware/Validator";
import { createNoteDto } from "../DTO/NoteDTO";

const noteRouter = Router();

noteRouter.post("/", validator(createNoteDto), createNote);


export default noteRouter;
