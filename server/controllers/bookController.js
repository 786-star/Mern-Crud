const Book = require('../models/bookModel')

exports.createBook = async (req, res) => {
    try {
        const { bookName, bookTitle, author, sellingPrice, publishDate } = req.body;

        if (!req.body) {
            return res.status(400).json({ message: "Request body missing" });
        }

        const addBook = await Book.create({
            bookName, bookTitle, author, sellingPrice, publishDate
        })

        res.status(201).json({
            message: "Book Created Successfully",
            data: addBook
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


exports.getBooks = async (req, res) => {
    try {
        const book = await Book.find();
        return res.status(200).json({
            message: "All Books Get Successfully",
            totalCount: book.length,
            book
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}