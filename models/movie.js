<<<<<<< HEAD
import mongoose from "mongoose"

const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: { 
    type: Date, 
    default: function () {
      return new Date().getFullYear()
    },
    min: 1927
  },
  mpaaRating: {
    type: String,
    enum: ["G", "PG", "PG-13", "R"]
  },
  cast: [String],
  nowShowing: { type: Boolean, default: false },
}, {
  timestamps: true,
})

const Movie = mongoose.model("Movie", movieSchema)

export {
  Movie
}

// If we didn't have line 3
// const movieSchema = new mongoose.Schema({
  
// })
=======
import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const movieSchema = new Schema(
    {
        title: String,
        releaseYear: Number,
        mpaaRating: String,
        cast: [String],
        nowShowing: Boolean,
    },
    {
        timestamps: true,
    }
)
// Compile the schema into a model and export it
const Movie = mongoose.model('Movie', movieSchema)

export {
    Movie
}
>>>>>>> 357b23c86ad41b2fedf42a801e36e4072f372b00
