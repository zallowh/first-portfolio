const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    fullNames: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    cellPhone: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', dataSchema);

module.exports = User;
