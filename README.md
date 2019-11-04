
# Create a Blog Api
___

| Users       | canNull |     | Admin       | canNull | *           |
| ---         | ---     | --- | ---         | ---     | ---         |
| ID          | no      |     | ID          | no      |             |
| username    | no      |     | USER_ID     | no      | user.id     |
| email       | no      |
| password    | no      |
| bio         | yes     |
| age         | yes     |

| Posts       | canNull   | * 
| ---         | ---       | ---
| ID          | no        |
| title       | no        |
| contents    | no        |
| USER_ID     | no        |  user.id

| Comments    | canNull   | * 
| ---         | ---       | ---
| ID          | no        |
| contents    | no        |
| POST_ID     | no        |  post.id
| USER_ID     | no        |  user.id