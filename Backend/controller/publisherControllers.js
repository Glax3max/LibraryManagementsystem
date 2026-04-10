import Publisher from "../model/publisher.model.js";

export const getPublisher =async (req,res) => {
    try {
         const publishers = await Publisher.find({});
        res.status(200).json(publishers);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}