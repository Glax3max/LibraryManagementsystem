import Author from "../model/author.model.js";

export const getAuthors = async(req , res) => {
    try {
        const authors = await Author.find({});
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}