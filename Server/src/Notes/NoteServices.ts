import { Request, Response } from "express";
import noteModel from "../Schema/NoteSchema";
import { responseTemplate } from "../utils";

export const createNote: any = async (req: Request, res: Response) => {
  try {
    const { title, authorID, value } = req.body;

    const newNote: any = new noteModel({ title, value, authorID });
    
    const savedPost = await newNote.save();
    console.log("@@", savedPost);
    return res.json({ data: savedPost });
  } catch (error) {
    console.log("ERR", error);
  }
};
