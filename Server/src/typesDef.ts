import { Schema } from "mongoose";

export interface Note {
    title:string,
    authorID:Schema.Types.ObjectId,
    value:string
}