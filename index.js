const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
const URI = 'mongodb+srv://zerll5100:qwer123$@boilerplate.efljm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose
    .connect(URI)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})