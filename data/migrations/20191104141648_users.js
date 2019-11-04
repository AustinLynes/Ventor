
exports.up = function (knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments()
        tbl.text('username', 25)
            .notNullable()
            .unique()
        tbl.text('email', 250)
            .notNullable()
            .unique()
        tbl.text('password')
            .notNullable()
        tbl.text('name')
            .notNullable()
        tbl.text('bio', 250)
        tbl.integer('age')
        tbl.blob('profile-picture')
        tbl.integer('is-admin')
            .notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users')
};
