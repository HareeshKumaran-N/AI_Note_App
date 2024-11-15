import { model, Schema } from "mongoose";

export const noteSchema = new Schema({
    title:{type:String,required:true},
    value:{type:String,required:true},
    authorID:{type:Schema.Types.ObjectId,required:true,ref:'users'}
})

const noteModel = model('note',noteSchema)

export default noteModel