const express = require('express')
const router = express.Router()
const con = require('../config/dbconfig')

// path /api/actor
router.get('/', (req, res)=> {
    // .query(SQL QUERY, CALLBACK FUNCTION)
    con.query(
        'select * from actor;',
        (error, rows)=> {
            if (!error) {
                if (rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else  {
                console.log('ERROR:', error)
            }
        }
    )
})

router.get('/:id', (req, res)=> {
    const id = req.params.id

    con.query(
        `select * from actor where actor_id = ${id};`,
        (error, rows)=> {
            if (!error) {
                if (rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else  {
                console.log('ERROR:', error)
            }
        }
    )
})

module.exports = router