const express = require('express');
const { createBook, getBooks, deleteBook, updateBook } = require('../controllers/bookController');

const router = express.Router();

// add books route 
router.post('/add', createBook)

// get all books 
router.get('/get', getBooks)

// delete book 
router.delete('/:id', deleteBook)

// update book 
router.put('/:id', updateBook)

module.exports = router;