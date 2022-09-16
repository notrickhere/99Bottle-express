const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`99 Bottles of beer on the wall <a href="/98">take one down, pass it around</a>`)
})

app.get('/0', (req, res) => {
    res.send(`You DRANK IT ALL! <a href="/">RESET</a>`)
})

app.get('/:bottles', (req, res) => {
    let minusOne = parseInt(req.params.bottles) - 1
    res.send(`${req.params.bottles} Bottles of beer on the wall <a href='/${minusOne}'>take one down, pass it around</a>`)
})



app.listen(3000, () =>{
    console.log('listening')
})