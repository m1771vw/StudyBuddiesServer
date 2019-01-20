const mongoose = require('mongoose');
const { Schema } = mongoose;

const flashCardSchema = new Schema({
    setname: String,
    description: String,
    creator: String,
    cardColor: String,
    cards: Array
})

const FlashcardSet = mongoose.model('flashcardset', flashCardSchema);

module.exports = {
    FlashcardSet
};