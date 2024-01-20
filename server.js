const express = require('express')
const {listen} = require("express/lib/application");
const app = express()
const cors = require('cors')
const PORT = 8000
const {kickList} = require('./resources.js')

app.use(cors())

app.use(express.static('public'))
app.get('/api/:kickName', (req,res)=>{
    const kicksName = req.params.kickName.toLowerCase()
    if(kickList[kicksName]) {
        res.json(kickList[kicksName])
    } else {
        res.json({
            error : true
        })
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}!`)
})
