import { Movie } from "../models/movie.js"

function newMovie(req, res) {
  res.render("movies/new", {
    title: "Add Movie"
  })
}

function create(req, res) {
  console.log("REQ.BODY:", req.body)
  req.body.nowShowing = !!req.body.nowShowing
  if (req.body.cast) {
    req.body.cast = req.body.cast.split(", ")
  }
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Movie.create(req.body)
    .then(movie => {
      console.log("CREATED MOVIE:", movie)
      // SEND A GET REQUEST TO THIS URL!
      res.redirect(`/movies`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/movies')
    })
}

function index(req, res) {
  Movie.find({})
    .then(movies => {
      res.render("movies/index", {
        movies: movies,
        title: "All Movies",
      })
    })
}
function show(req, res) {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render('movies/show', {
        title: 'Movie Detail',
        movie: movie,
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
}
function deleteMovie(req, res) {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/movies")
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
}
function edit(req, res) {
  Movie.findById(req.params.id)
    .then(movie => {
      res.render("movies/edit", {
        movie, // same as: movie: movie
        title: "Edit Movie"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
}
function update(req, res) {
  req.body.nowShowing = !!req.body.nowShowing
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key]
  }
  Movie.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(movie => {
      res.redirect(`/movies/${movie._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
}
export {
  newMovie as new,
  create,
  index,
  show,
  deleteMovie as delete,
  edit,
  update
}