const express = require('express')
const {listen} = require("express/lib/application");
const app = express()
const cors = require('cors')
const PORT = 8000
const {kickList, getRandomKick} = require('./resources.js')

app.set('view engine', 'ejs')

app.use(cors())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs', {randomKick: getRandomKick()})
})
app.get('/api/:kickName', (req, res) => {
    const kicksName = req.params.kickName.toLowerCase()
    if (kickList[kicksName]) {
        res.json({
            randomKick: getRandomKick(),
            foundKick: kickList[kicksName]
        })

    } else {
        res.json({
            error: true
        })
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}!`)
})
