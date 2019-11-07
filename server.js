const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const userRoutes = require('./models/users/userRoutes')
const Users = require('./models/users/userModel')
const secrets = require('./config/secrets')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validateUser} = require('./middleware/user-middleware')

const server = express()
server.use(express.json())
server.use(cors())
server.use(morgan('combined'))
server.use(helmet())

server.use('/api', userRoutes)

server.post('/login', validateUser, (req, res, next) => {
    const { username, password } = req.headers
    Users.findBy( username )
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user)
                res.status(200).json({ messege: `Welcome ${user.name}.`, token })
            }
            else
            res.status(401).json({ message: 'Invalid Credentials' });
        })
        .catch((err) => {
            next(err)
        })
})


server.post('/register', validateUser, (req, res, next) => {
    var user = req.user
    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash
    Users.insert(user)
        .then(() => {
            const token = generateToken(user)
            user = {...user, token}
            console.log(user)
            res.status(201).json({ messege: 'user created successfully!' })
        })
        .catch((err) => {
            next(err)
        })
})


const generateToken = (user) => {
    //remember that what you put in the payload can be seen...
    //Try to make sure everything that isnt necissary is not there
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
}

server.get('/', (req, res) => {
    res.send('Welcome to the API')
})

module.exports = server