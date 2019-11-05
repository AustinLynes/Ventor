const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const userRoutes = require('./models/users/userRoutes')
const server = express()
server.use(express.json())
server.use(cors())
server.use(morgan('combined'))
server.use(helmet())

server.use('/api/', userRoutes)

server.get('/', (req, res) => {
    res.send('Welcome to the API')
})

module.exports = server