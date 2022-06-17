import { Movie } from '../models/movie.js'

function newMovie(req, res) {
    res.render('movies/new', {
        title: 'Add movie'
    })

}
function create(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    req.body.nowShowing = !!req.body.nowShowing
    // replace and split if it's not an empty string
    if (req.body.cast) {
        // remove whitespace next to commas
        req.body.cast = req.body.cast.split(', ')
    }
    Movie.create(req.body)
        .then(movie => {
            res.redirect(`/movies/new`)
        })
        .catch(err => {
            res.redirect('/movies/new')
        })
}
export {
    newMovie as new,
    create,
}