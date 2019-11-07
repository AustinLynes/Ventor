
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
      {
        "username":'Ventor_A-Bot',
        "email":'ventorbot456@gmail.com',
        "password":'Password',
        "name":'ven',
        "bio":'the main tester for the ventor app, also is an admin',
        "isAdmin": 1
      },
      {
        "username":'Ventor-Bot',
        "email":'ventorbot123@gmail.com',
        "password":'Password',
        "name":'ven',
        "bio":'the main tester for the ventor app',
        "isAdmin": 0
      },
      ]);
    });
};
