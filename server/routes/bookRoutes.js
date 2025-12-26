const express = require('express');
const { createBook, getBooks } = require('../controllers/bookController');

const router = express.Router();

// add books route 
router.post('/add', createBook)

// get all books 
router.get('/get', getBooks)

module.exports = router;