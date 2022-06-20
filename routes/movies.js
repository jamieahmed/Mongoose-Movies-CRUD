import { Router } from 'express'
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
