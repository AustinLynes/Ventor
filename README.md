# Create a Blog Api

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
    will give CRUD functionality to all users in the database
 
> /api/administrators    
    will give CRUD functionality to all Admins in the Database..


| Posts    | canNull | *       |
|----------|---------|---------|
| ID       | no      |         |
| title    | no      |         |
| contents | no      |         |
| USER_ID  | no      | user.id |

| Comments | canNull | *       |
|----------|---------|---------|
| ID       | no      |         |
| contents | no      |         |
| POST_ID  | no      | post.id |
| USER_ID  | no      | user.id |

| Messeges | canNull | *       |
|----------|---------|---------|
| ID       | no      |         |
| body     | no      |         |
| to_id    | no      |         |
| USER_ID  | no      | user.id |

