import { Router } from 'express'
<<<<<<< HEAD
import * as moviesCtrl from "../controllers/movies.js"

const router = Router()

// GET localhost:3000/movies
router.get('/', moviesCtrl.index)

// GET localhost:3000/movies/news
router.get('/new', moviesCtrl.new)

// POST localhost:3000/movies
router.post('/', moviesCtrl.create)

// Show localhost:3000/movies/:id
router.get('/:id', moviesCtrl.show)

// delete localhost:3000/movies/:id
router.delete("/:id", moviesCtrl.delete)

// localhost:3000/movies/:id/edit
router.get("/:id/edit", moviesCtrl.edit)

// localhost:3000/movies/:id
router.put("/:id", moviesCtrl.update)
export {
  router
}
=======
const router = Router()
import * as moviesCtrl from '../controllers/movies.js'


// Get localhost 3000/movies
router.get('/', moviesCtrl.index)

// GET /movies/new
router.get('/new', moviesCtrl.new)


// POST /movies
router.post('/', moviesCtrl.create)

export {
  router
}
>>>>>>> 357b23c86ad41b2fedf42a801e36e4072f372b00
