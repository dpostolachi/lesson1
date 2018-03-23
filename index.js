const movies = require('./movies.js')
const express  = require('express')
const app = express()
const cors = require( 'cors' )

app.use( cors() )

app.get('/', ( req, res ) => {
  res.send( movies )
} )


app.listen(4000)
