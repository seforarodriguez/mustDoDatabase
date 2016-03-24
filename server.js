'use strict';

const express = require('express')
  ,   app = express()
  ,   mongoose = require('mongoose')
  ,   PORT = process.env.PORT || 3000


mongoose.connect('mongodb://localhost:27017/nodedatabase', (err) => {
  if (err) throw err;

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
  })
})