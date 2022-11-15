const author = require('../model/authors');

//These two use async methods
const getAllAuthors = async (req, res) => {
    try {
        const authors = await author.find();
        res.json(authors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getAuthorById = async (req, res) => {
    try {
        const author = await author.findById(req.params.id);
        res.json(author);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const createAuthor = (req, res) => {
    const incomingAuthor = req.body;

    const newAuthor = new author({
        name: incomingAuthor.name,
        email: incomingAuthor.email,
        contact: incomingAuthor.contact
    });

    newAuthor.save().then((author) => {
        return res.status(201).json(author);
    }).catch((err) => {
        return res.status(500).json({ message: err.message });
    });
};

const deleteAuthor = (req, res) => {
    author.findByIdAndDelete(req.params.id, (err, author) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(author);
        }
    });
};

module.exports = {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    deleteAuthor
};