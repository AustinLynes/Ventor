const errorLogger = (err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: 'there was an error processing the request',
        error: err
    })
}

module.exports = errorLogger