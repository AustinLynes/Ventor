require('dotenv').config()
const server = require('./server')
const routeCheck = require('./middleware/route-checker-middleware')
const errorHandler = require('./middleware/error-handler')

const PORT = process.env.PORT || 5000
server.use(routeCheck)
server.use(errorHandler)
server.listen(PORT, ()=>{
    console.log('welcome to the ventor api')
})