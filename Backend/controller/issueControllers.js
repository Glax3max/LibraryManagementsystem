import Book from "../model/book.model.js";
import Issue from "../model/issue.model.js";

export const requestIssue = async(req,res) => {

    try {
        const {bookId,userId} = req.body;
        console.log(req.body)
        const book = await Book.findById(bookId);
        if(!book) {
            return res.status(404).json({message:"Book not found"});
        }
        
        if(book.quantity == 0) {
            return res.status(200).json({book},{message:"Out of stock"});
        }
        
        
        const updatedBook = await Book.findByIdAndUpdate({
            _id:bookId,
            quantity:book.quantity-1,
        })
        
        // creating an issue for a book
        const newIssue = await Issue.create({
            bookId,
            userId
        })
        console.log(newIssue)
        res.status(200).json({message:"Book issued succeefully"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}

export const resolveIssue = async(req,res) => {
    try {
        const {id} = req.params;
    const issue = await Issue.findById(id);

    if(!issue) {
        return res.status(404).json({message:"issue not found"});
    }

    const updatedIssue = await Issue.findByIdAndUpdate(id,{
        issueStatus:"issued",
        
    },{ new: true })

    res.status(200).json(updatedIssue)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
}

export const returnIssue = async(req,res) => {
   try {
        const {id} = req.params;
    const issue = await Issue.findById(id);

    if(!issue) {
        return res.status(404).json({message:"issue not found"});
    }

    const updatedIssue = await Issue.findByIdAndUpdate(id,{
        issueStatus:"returned",
        
    },{ new: true })

    res.status(200).json(updatedIssue)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
}

export const issueHistory = async(req,res) => {
    try{
        const allIssues = await Issue.find({});
        res.status(200).json(allIssues);
    }catch(error) {
        res.status(500).json(error.message);
    }
}

export const getUnsettledIssue = async(req,res)=> {
    try{
        const allIssues = await Issue.find({issueStatus:"requested"});
        res.status(200).json(allIssues);
    }catch(error) {
        res.status(500).json(error.message);
    }
}


export const getSettledIssue = async(req,res)=> {
    try{
        const allIssues = await Issue.find({issueStatus:"issued"});
        res.status(200).json(allIssues);
    }catch(error) {
        res.status(500).json(error.message);
    }
}

export const returnedIssue = async(req,res)=> {
    try{
        const allIssues = await Issue.find({issueStatus:"returned"});
        res.status(200).json(allIssues);
    }catch(error) {
        res.status(500).json(error.message);
    }
}
