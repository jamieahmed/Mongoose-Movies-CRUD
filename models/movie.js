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