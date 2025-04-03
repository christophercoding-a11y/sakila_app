const express = require('express')
const router = express.Router()
const port = process

const fetch = (...args)=> import('node-fetch').then(({ default: fetch}))


router.use('/api/actor', require('./actorRoutes'))

// home page
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Sakila Home page',

    })
})

router.get('/actor', (req, res)=> {
    const url = `http://localhost:${port}/api/actor`

    fetch(url)
    .then(res)
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