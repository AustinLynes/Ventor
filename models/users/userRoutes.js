const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const Users = require('./userModel.js')

router.post('/login',validateUser, (req, res) => {
    const { username, password } = req.headers
    console.log(username)
    console.log(password)
    Users.findBy({username})
        // .first()
        .then(user => {
            console.log(user)
            if (user && bcrypt.compareSync(password, user.password))
                res.status(200).json({ messege: `Welcome ${user.name}.` })
            else
                res.status(401).json({ message: 'Invalid Credentials' });

        })
        .catch((err)=>{
            res.status(500).json({messege:err})
        })

})

router.post('/register', validateUser, (req, res) => {
    const user = req.user
    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash
    Users.insert(user)
        .then(() => {
            res.status(201).json({ messege: 'user created successfully!' })
        })
        .catch((err) => {
            res.status(500).json({ messege: err })
        })

})

router.get('/users', (req, res) => {
    Users.find()
        .then(user => {
            res.status(200).json(user)
        })
})


router.get('/users/admin', (req, res) => {
    Users.findAdmin()
        .then(admin => {
            res.status(200).json(admin)
        })
})

router.delete('/users/:id', validateUserId, (req, res) => {
    const id = req.user.id
    Users.remove(id)
        .then(user => {
            res.status(200).json({ messege: `user removed sucessfully` })
        })
})

router.put('/users/:id', validateUserId, (req, res) => {
    const updatedVals = req.body
    const id = req.user.id
    Users.update(id, updatedVals)
        .then(user => {
            res.status(201).json(user)
        }).catch(() => {
            res.status(500).json({ message: 'user could not be updated' })
        })
})

function validateUserId(req, res, next) {
    const { id } = req.params
    Users.findById(id)
        .then(user => {
            req.user = user
            next()
        })
        .catch(() => {
            res.status(400).json({
                messege: 'invalid user id'
            })
        })
};

function validateUser(req, res, next) {
    const user = req.body
    if (!user) {
        res.status(400).json({ messege: 'missing user data' })
        if (!user.name) {
            res.status(400).json({ messege: 'missing name on user' })
        }
    }
    req.user = user
    next()

};


module.exports = router