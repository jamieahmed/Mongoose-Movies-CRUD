import { Movie } from '../models/movie.js'



function index(req, res) {
    Movie.find({})
        .then(movies => {
            res.render('movies/index', {
                movies: movies,
                title: "All Movies"

            })
        })
        .catch(error => {
            console.log(error)
            res.redirect('/movies')
        })
}
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
            res.redirect(`/movies`)
        })
        .catch(err => {
            res.redirect('/movies')
        })
}


export {
    newMovie as new,
    create,
    index,
}