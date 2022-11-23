const express = require('express');
const router = express.Router();
const authorController = require('../controller/authors');

router.get('/', authorController.getAllAuthors);
router.get('/:id', authorController.getAuthorById);
router.post('/', authorController.createAuthor);
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;