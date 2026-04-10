import mongoose from "mongoose";

const issueSchema = new mongoose.Schema({
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book',
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    issueStatus:{
        type:String,
        enum: ["requested", "issued", "returned"],
        default:"requested",
        required:true
    }
},{
    timestamps:true
})

const Issue = mongoose.model("Issue",issueSchema);

export default Issue;