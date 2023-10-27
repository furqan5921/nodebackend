const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
