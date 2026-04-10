import Author from "../model/author.model.js";
import Book from "../model/book.model.js";
import BookAuthorMap from "../model/bookAuthorMap.model.js";

export const createBook = async(req,res) => {
    const {bookIsbn,bookName,quantity,publicationYear,genre,publisher,authors} = req.body;
    const book = await Book.findOne({bookIsbn});

    // checking if any required field is missing 
    if(!bookIsbn || !bookName || authors.length == 0)  {
        return res.status(400).json({error:"All fields are required"})
    }
    // if book already exist
    if(book) {
        return res.status(200).json({message:"Book already exist"});
    }

    // creating new Book
    const newBook = await Book.create({
        bookIsbn,
        bookName,
        quantity,
        publicationYear,
        genre
    });

    // Looping over all the input author and storing in the author table and bookAuthormap table
    for(let authorName of authors) {
        let author = await Author.findOne(authorName);

        if(!author) {
            author = await Author.create(authorName);
        }

        await BookAuthorMap.create({
            author_Id : author._id,
            book_Id : newBook._id
        })
    }


    res.status(200).json(newBook)
}

export const UpdateBook = async(req,res) =>{
    try{
        const {id} = req.params;
        const updateBook = await Book.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        );
        
        if(!updateBook) {
            return res.status(404).json({message:"Book not found"});
        }
        
        res.status(200).json(updateBook);
    }catch(err) {
        res.status(500).json({message:"Server error"});
    }
};


export const getAllBook = async(req,res) =>{
    try{

        const allBooks = await Book.find({});
        if(allBooks.length == 0) {
            return res.status(404).json({message:"No book found"});
        }

        res.status(200).json(allBooks);
    }catch(err) {
        res.status(500).json({message:"Server error"})
    }
}


export const getBookById = async(req,res) =>{
    try{
        const {id} = req.params;
        const bookById = await Book.findById(id);

        if(!bookById) {
            return res.status(404).json({message:"No book found"});
        }
        res.status(200).json(bookById);
    }catch(err) {
        res.status(500).json({message:err.message});
    } 
}


export const deleteBookById = async(req,res) =>{
    try {
        const {id} = req.params;
        const book = await Book.findByIdAndDelete(id);
        if(!book) {
            return res.status(404).json({message:"Book not found"})
        }
        res.status(200).json({message:"Book deleted succeefully"})
    } catch (error) {
        res.status(500).json({message:"Server error"});
    }
}
