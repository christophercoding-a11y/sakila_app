// 1. Import express and create a server instance and port
const express = require('express')
const server = express()
const helmet = require('helmet')
const port = process.env.port || 3000

// import router
const router = require('./app/routes/router')


// increase security using helmet
server.use(helmet()).use(express.json()).use('/', router)

// Root Route
// .get(path, callback function)
server.get('/api', (req, res)=> {
    res.json({
        'All Actors': `http://localhost:${port}/api/actor`,
        'All Customers': `http://localhost:${port}/api/customer`,
        'All Films': `http://localhost:${port}/api/film`,
    })
})

server.set('view engine', 'ejs')
// 2. Listen on the port
// .listen(port, callback function)
server.listen(port, ()=> console.log(`Let's get this PORTY started in room ${port}...`))

