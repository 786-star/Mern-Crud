const Book = require('../models/bookModel')
const mongoose = require('mongoose')

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


exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        // Validate id
        if (!id) { return res.status(400).json({ message: "Book id is required" }) }

        // Check if book exists
        const book = await Book.findById(id);
        if (!book) { return res.status(404).json({ message: "Book not found" }) }

        // Delete Books 
        await Book.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Book deleted successfully",
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}

exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            bookName,
            bookTitle,
            author,
            sellingPrice,
            publishDate,
        } = req.body || {};

        if (!req.body) {
            return res.status(400).json({ message: "Request body is required" });
        }

        const updatedBook = await Book.findByIdAndUpdate(
            id,
            { bookName, bookTitle, author, sellingPrice, publishDate },
            { new: true, runValidators: true }
        );

        return res.status(200).json({
            message: "Book updated successfully",
            data: updatedBook,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};
