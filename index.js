const mongoose = require('mongoose')
const express = require('express')
const app = express()

const car = require('./routes/car')
app.use(express.json())

app.use('/api/cars', car)

const port = process.env.PORT || 3003
app.listen(port, () => {
  console.log(`Listening port: ${port}`)
})

mongoose.connect('mongodb://localhost/carsdb', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to mongodb')
  })
  .catch(error => console.log('Cant connected to DB'))