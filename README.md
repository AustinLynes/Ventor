## Ventor API
___

| Users           | canNull |
|-----------------|---------|
| ID              | no      |
| username        | no      |
| email           | no      |
| password        | no      |
| name            | no      |
| bio             | yes     |
| age             | yes     |
| is-admin        | no      |

```md
> /api/users        
    will give...
    CREATE
         a `user` 
    READ 
        all `users` 
```
```md
 > /api/users/:id  
    will give...
    READ 
        `user` with `:id` 
    UPDATE 
        `user` with `:id` 
    DELETE 
        `user` with `:id` 
```

```md
> /api/admins        
    will give...
    CREATE
         a `user` where is-admin === 1
    READ 
        all `users` where is-admin === 1
```
```md
 > /api/admins/:id  
    will give...
    READ 
        `user` with `:id` where is-admin === 1 
    UPDATE 
        `user` with `:id` where is-admin === 1 
    DELETE 
        `user` with `:id` where is-admin === 1
```


| Posts    | canNull | *       |
|----------|---------|---------|
| ID       | no      |         |
| title    | no      |         |
| contents | no      |         |
| USER_ID  | no      | user.id |

```md
> /api/users/:id/posts  
    will give...
    READ 
    
        all `posts` from the `user` with `:id` 
        
    CREATE 
        a `post` from the `user` with `:id` 
```
```md
> /api/users/:id/posts/:post_id
    will give...
    READ 

        the `post` found with `:post_id` that comes from the `user` with `:id` 
    UPDATE 

        the `post` found with `:post_id` that comes from the `user` with `:id` 

    DELETE 

        the `post` found with `:post_id` that comes from the `user` with `:id` 
```

| Comments | canNull | *       |
|----------|---------|---------|
| ID       | no      |         |
| contents | no      |         |
| POST_ID  | no      | post.id |
| USER_ID  | no      | user.id |

```md
> /api/users/:id/posts/:post_id/comments
    will give...
    READ 
        all `comments` on the `post` with `:post_id` from the `user` with `:id` 
    CREATE 
        a `comment` on the `post` with `:post_id` from the `user` with `:id` 
```
```md
> /api/users/:id/posts/:post_id/comments/:comment_id
    will give...
    READ
        the `comment` with `:comment_id` on the `post` with `:post_id` that comes from the `user` with `:id` 
    UPDATE 
        the `comment` with `:comment_id` on the `post` with `:post_id` that comes from the `user` with `:id` 
    DELETE
        the `comment` with `:comment_id` on the `post` with `:post_id` that comes from the `user` with `:id` 
```


| Messeges | canNull | *       |
|----------|---------|---------|
| ID       | no      |         |
| body     | no      |         |
| to_id    | no      |         |
| USER_ID  | no      | user.id |

 
```md
> /api/users/:id/messeges/:to
    will give...
    READ 
        all `messeges` from the `user` with `:id` that goes to the `user with id of :to` 
    CREATE 
        a `messege` from the `user` with `:id` that goes to the `user with the id of :to` 
```
```md
> /api/users/:id/messeges/:to/:messege_id
    will give...
    READ
        the `messege` with the `:message_id` from the `user` with `:id` that goes to the `user with the id of :to` 
    UPDATE
        the `messege` with the `:message_id` from the `user` with `:id` that goes to the `user with the id of :to` 
    DELETE
        the `messege` with the `:message_id` from the `user` with `:id` that goes to the `user with the id of :to` 
```
