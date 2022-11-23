const books = require('../model/books.js');

const getAllBooks = (req, res) => {
    books.find((err, books) => {
        if (err) {
            res.status(500).send
                ({
                    message: err.message
                });
        } else {
            res.status(200).send(books);
        }
    });
};

const getBookById = (req, res) => {
    books.findById(req.params.id).populate({
        path: 'author',
        select: 'name'
    }).exec((err, book) => {
        if (err) {
            res.status(500).send
                ({
                    message: err.message
                });
        } else {
            res.status(200).send(book);
        }
    })
}

const createBook = async (req, res) => {
    const incomingBook = req.body;
    const newBook = new books({
        title: incomingBook.title,
        author: incomingBook.author,
        description: incomingBook.description
    });
    try {
        const savedBook = await newBook.save();
        res.status(201).send(savedBook);
    } catch (err) {
        res.status(500).send
            ({
                message: err.message
            });
    }
}

const deleteBook = async (req, res) => {
    try {
        const deletedBook = await books.findByIdAndDelete(req.params.id);
        res.status(200).send(deletedBook);
    } catch (err) {
        res.status(500).send
            ({
                message: err.message
            });
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    deleteBook
}