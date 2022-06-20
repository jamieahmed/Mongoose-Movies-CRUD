<<<<<<< HEAD
import 'dotenv/config.js'
=======
import "dotenv/config.js"
>>>>>>> 357b23c86ad41b2fedf42a801e36e4072f372b00
import createError from 'http-errors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
<<<<<<< HEAD
import('./config/database.js')
import methodOverride from 'method-override'
=======
// Connect to the database with Mongoose
import('./config/database.js')
>>>>>>> 357b23c86ad41b2fedf42a801e36e4072f372b00

// import routers
import { router as indexRouter } from './routes/index.js'
import { router as moviesRouter } from './routes/movies.js'

// set up app
const app = express()

// view engine setup
app.set(
  'views',
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)
app.set('view engine', 'ejs')

// middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)

// mounted routers
app.use(methodOverride('_method'))
app.use('/', indexRouter)
app.use('/movies', moviesRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export {
  app
}
