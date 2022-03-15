const express = require('express')
const crypto = require('crypto')
const cluster = require('cluster')
const Worker = require('webworker-threads').Worker

const app = express()


app.get('/', (req, res) => {
    const worker = new Worker(() => {
        // do something
    })
})

app.get('/fast', (req, res) => {
    res.send('This was fast!')
})

app.listen(3000)