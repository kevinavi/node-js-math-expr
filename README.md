# node-js-math-expr
A node js application exposing REST API to evaluate mathematical expressions.

As of now, the scope is only for POSITIVE INTEGERS and DECIMALS and VALID expressions using *, /, +, - operators.

Future scope, need to add it for negative integers and if any expression is not valid then should return invalid.

## `Pre-requisities`
NodeJs

Yarn

Postman

## `Stacks`
ExpressJs

Mocha (for testing)

MongoDb

Firstly, clone the project
#### `git clone https://github.com/kevinavi/node-js-math-expr.git`

In the project directory

### `yarn install`

Open command prompt in this directory. Run the above command.
Gets all required node_modules

### `yarn dev`

Hosts on your local machine and you can have access to the APIs.

### `yarn test`

Runs unit tests and integration tests using Mocha.

### `Design Diagram`
![alt text](https://github.com/kevinavi/node-js-math-expr/blob/main/Design.png)

### `How to hit endpoints`
#### `To calculate a mathematical expression`
Use POSTMAN, POST http://localhost:8000/calculate

Body:

{

    expression:(78+98-34)+8-(6+8),
    
    userId:100
    
}

Result:

{

    "result": 136
    
}

#### `To know a which operator is most used by a user`
Use POSTMAN, GET http://localhost:8000/operator/usage

Body:

{

    userId:100
    
}

Result:
{

    "operator": "addition"
    
}
