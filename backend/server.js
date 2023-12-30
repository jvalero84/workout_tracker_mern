require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

const port = process.env.PORT || 4000

// express app
const app = express()

// middleware
app.use(express.json()) // It checks each request and if the body has data, it converts it to json on and makes it available to the request object.

app.use((req, res, next) => {
    // This runs on every request. if we want the next piece of middleware to run after this function, we should invoke next.
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes) // We want to make the routes relative to the path /api/workouts.. That's why we have to pass that path.

// connect to DB
mongoose
    .connect(process.env.MONG_URI)
    .then(() => {
        // listen for requests (We don't want to accept requests until we are connected to the DB!)
        app.listen(port, () => {
            console.log(`Connected to DB & listening on port ${port}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

// app.get("/", (req, res) => {
//     res.json({ msg: "welcome to the app" })
// })
