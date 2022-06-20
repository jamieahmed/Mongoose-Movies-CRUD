import mongoose from 'mongoose'

mongoose.connect(process.env.DATABASE_URL)
	
// shortcut to mongoose.connection object
const db = mongoose.connection

db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
<<<<<<< HEAD
})
=======
})


// the above code is only in first of all app
>>>>>>> 357b23c86ad41b2fedf42a801e36e4072f372b00
