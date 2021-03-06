const jwt = require('jsonwebtoken')
const secrets = require('../../config/secrets')
module.exports = (req, res, next) => {
    const token = req.headers.authorization
    if (token)
    {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken)=>{
            if(err){
                res.status(401).json({messege:'Invalid/Modified Token was Given Terminating Process..'})
            }else{
                //the token is good
                req.username = decodedToken.username
                next()
            }
        })
    }else{
        res.status(400).json({messege:'🔒 🔒 Please Log in To continue 🔒 🔒 '})
    }
  
}