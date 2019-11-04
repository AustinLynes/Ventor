## Ventor API
___

| Users    | canNull | *         |   | Admin   | canNull |
|----------|---------|-----------|---|---------|---------|
| ID       | no      |           |   | ID      | no      |
| username | no      |           |   |         |         |
| email    | no      |           |   |         |         |
| password | no      |           |   |         |         |
| bio      | yes     |           |   |         |         |
| age      | yes     |           |   |         |         |
| ADMIN_ID | yes     | admin.id  |   |         |         |


> /api/users  
    will give...
    CREATE
         a `user` 
    READ 
        all `users` 

 > /api/users/:id  
    will give...
    READ 
`user` with `:id` 
    UPDATE 
`user` with `:id` 
    DELETE 
`user` with `:id` 

> /api/admins    
    will give...
    CREATE 
`user` with `ADMIN_ID` 
    READ all
`users` with `ADMIN_ID` 

> /api/admins/:admin_id  
    will give...
    READ 
`user` with `:admin_id` 
    UPDATE 
`user` with `:admin_id` 
    DELETE 
`user` with `:admin_id` 



| Posts    | canNull | *       |
|----------|---------|---------|
| ID       | no      |         |
| title    | no      |         |
| contents | no      |         |
| USER_ID  | no      | user.id |

 
> /api/users/:id/posts  
    will give...
    READ 
    
        all `posts` from the `user` with `:id` 
        
    CREATE 

        a `post` from the `user` with `:id` 

> /api/users/:id/posts/:post_id
    will give...
    READ 

        the `post` found with `:post_id` that comes from the `user` with `:id` 
    UPDATE 

        the `post` found with `:post_id` that comes from the `user` with `:id` 

    DELETE 

        the `post` found with `:post_id` that comes from the `user` with `:id` 


| Comments | canNull | *       |
|----------|---------|---------|
| ID       | no      |         |
| contents | no      |         |
| POST_ID  | no      | post.id |
| USER_ID  | no      | user.id |

 
> /api/users/:id/posts/:post_id/comments
    will give...
    READ 

        all `comments` on the `post` with `:post_id` from the `user` with `:id` 

    CREATE 

        a `comment` on the `post` with `:post_id` from the `user` with `:id` 


> /api/users/:id/posts/:post_id/comments/:comment_id
    will give...
    READ

        the `comment` with `:comment_id` on the `post` with `:post_id` that comes from the `user` with `:id` 

    UPDATE 

        the `comment` with `:comment_id` on the `post` with `:post_id` that comes from the `user` with `:id` 

    DELETE

        the `comment` with `:comment_id` on the `post` with `:post_id` that comes from the `user` with `:id` 



| Messeges | canNull | *       |
|----------|---------|---------|
| ID       | no      |         |
| body     | no      |         |
| to_id    | no      |         |
| USER_ID  | no      | user.id |

 

> /api/users/:id/messeges/:to

    will give...
    READ 

        all `messeges` from the `user` with `:id` that goes to the `user with id of :to` 

    CREATE 

        a `messege` from the `user` with `:id` that goes to the `user with the id of :to` 


> /api/users/:id/messeges/:to/:messege_id

   will give...
   READ

     the `messege` with the `:message_id` from the `user` with `:id` that goes to the `user with the id of :to` 

   UPDATE

     the `messege` with the `:message_id` from the `user` with `:id` that goes to the `user with the id of :to` 

   DELETE

     the `messege` with the `:message_id` from the `user` with `:id` that goes to the `user with the id of :to` 

