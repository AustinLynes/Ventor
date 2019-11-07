const Users = require('../models/users/userModel')

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

    }
    req.user = user
    next()

};
module.exports = {
    validateUser,
    validateUserId
}