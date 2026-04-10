import mongoose from "mongoose";

const bookAuthorMapSchema = new mongoose.Schema({
    author_Id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Author',
        required:true
    },
    book_Id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book",
        required:true
    }
},{
    timestamps:true
})

const BookAuthorMap = mongoose.model("BookAuthorMap",bookAuthorMapSchema);
export default BookAuthorMap;