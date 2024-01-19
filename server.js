const express = require('express')
const {listen} = require("express/lib/application");
const app = express()
const PORT = 8000

const kickList = {
    'axe kick': {
        'name': 'Axe Kick or Naeryo Chagi',
        'explanation': 'Top to down kick that hits with great velocity',
        'image': 'blala',
        'video': 'blala',
        'tips': 'lalala',
        'variations': 'blalala'
    },
    'front kick':{
        'name': 'Front Kick or blah',
        'explanation': 'blah blah',
        'image': 'blala',
        'video': 'blala',
        'tips': 'lalala',
        'variations': 'blalala'
},
    'side kick':{
        'name': 'Side Kick or blah',
        'explanation': 'blah blah',
        'image': 'blala',
        'video': 'blala',
        'tips': 'lalala',
        'variations': 'blalala'
    }
}


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:kickName', (req,res)=>{
    const kicksName = req.params.kickName.toLowerCase()
    if(kickList[kicksName]) {
        res.json(kickList[kicksName])
    } else {
        res.json(kickList['front kick'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}!`)
})
