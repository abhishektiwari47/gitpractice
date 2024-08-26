const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    link: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Card', cardSchema);
