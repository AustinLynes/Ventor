const db = require('../../data/db')

function find() {
    return db('users')
}
function findAdmin() {
    return db('users').where( 'isAdmin', 1 )
}
function findById(id) {
    return db('users')
        .where({id})
        .first()
}
function findBy(username) {
    return db('users')
        .where(username).first()
}
function insert(user) {
   return db('users')
        .insert(user)
        .then(ids => (findById({ id: ids[0] })))
}
function update(id, user) {
    return db('users')
        .where({id})
        .update(user)
}
function remove(id) {
    return db('users').where('id', id).del()
}

function findBy(username){
   return db('users').where({username}).first()
}
module.exports = {
    find,
    findAdmin,
    findById,
    insert,
    remove,
    update,
    findBy,
    findBy
}