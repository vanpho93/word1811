const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/word1811')
.then(() => console.log('Database connected.'))
.catch((error) => console.log('Cannot connect database.', error))

const wordSchema = new mongoose.Schema({
    en: { type: String, trim: true, unique: true, required: true },
    vn: { type: String, trim: true, required: true },
    isMemorized: { type: Boolean, default: false, required: true }
});

const Word = mongoose.model('Word', wordSchema);

module.exports = { Word };
