import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema({
    publisherName:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const Publisher = mongoose.model("Publisher",publisherSchema);

export default Publisher;