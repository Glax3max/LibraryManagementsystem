import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    bookIsbn:{
        type:Number,
        required:true,
        unique:true
    },
    bookName:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    publicationYear:{
        type:Number,
        required:true
    },
    genre:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const Book = mongoose.model("Book",bookSchema);
export default Book;