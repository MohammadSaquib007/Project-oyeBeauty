const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema(
  {
    movie: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    },
    releasedYear: {
      type: String,
      required: true
    },
    genres: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model('film', movieSchema);
