import mongoose from "mongoose";

const publisherAuthorMapSchema = new mongoose.Schema({
    publisherId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Publisher",
        required:true
    },
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Author",
        required:true
    }
},{
    timestamps:true
})


const PublisherAuthorMap = mongoose.model("PublisherAuthorMap",publisherAuthorMapSchema);

export default PublisherAuthorMap;