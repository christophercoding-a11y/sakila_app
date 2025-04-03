const express = require('express')
const router = express.Router()
const port = process.env.port || 3000

const fetch = (...args)=> import('node-fetch').then(({ default: fetch})=> fetch(...args))


router.use('/api/actor', require('./actorRoutes'))

// home page
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Sakila Home Page',
        name: 'My Sakila App'
    })
})

router.get('/actor', (req, res)=> {
    const url = `http://localhost:${port}/api/actor`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            res.render('pages/actor', {
                title: 'All Actors',
                name: 'All Actors',
                data
            })
        })
})

// error page
router.get(/(.*)/, (req, res)=> {
    if (req.url == '/favicon.ico') {
        res.end()
    } else {
        res.render('pages/404', {
            title: '404 Error',
            name: 'This page does not exits you silly goose'
        })
    }
})

module.exports = router