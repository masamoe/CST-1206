const express = require('express');
const router = express.Router();
const bookController = require('../controller/books');

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.createBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;