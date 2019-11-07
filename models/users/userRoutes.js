const express = require('express')
const router = express.Router()
const Users = require('./userModel.js')
const {validateUserId} = require('../../middleware/user-middleware')
const auth = require('../../middleware/auth/authentication-middleware')

router.get('/users', auth, (req, res) => {
    Users.find()
        .then(user => {
            res.status(200).json({loggedInUser:req.username, user})
        })

})

router.get('/users/admin',auth,admin, (req, res) => {
    Users.findAdmin()
        .then(admin => {
            res.status(200).json(admin)
        })
})

router.get('/users/:id',auth,validateUserId, (req, res) => {
    const id = req.user.id
    Users.findById(id)
        .then(user => {
            res.status(200).json(user)
        })
})

router.delete('/users/:id',auth,validateUserId, (req, res) => {
    const id = req.user.id
    Users.remove(id)
        .then(user => {
            res.status(200).json({ messege: `user removed sucessfully` })
        })
})

router.put('/users/:id',auth, validateUserId, (req, res) => {
    const updatedVals = req.body
    const id = req.user.id
    Users.update(id, updatedVals)
        .then(user => {
            res.status(201).json(user)
        }).catch(() => {
            res.status(500).json({ message: 'user could not be updated' })
        })
})

// middleware

function admin(req, res, next){
    const username = req.username

    Users.findBy(username)
    .then(user=>{
        if(user.isAdmin){
                next()
        }
        else{
            res.status(403).json({messege:'Im sorry but you are not an admin and cannot see this page'})
        }
    })
    .catch((err)=>{
        console.log(err)
        res.status(404).json({messege:'User not Found'})
    })
    
}
module.exports = router