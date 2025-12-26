const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
    },
    bookTitle: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    sellingPrice: {
        type: String,
        required: true
    },
    publishDate: {
        type: String,
    }
}, { timestamps: true })

module.exports = mongoose.model("Book", bookSchema)