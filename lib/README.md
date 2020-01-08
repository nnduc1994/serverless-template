This is a boilerplate for new Serverless project. The project structure is descripted below: 

/ - root folder
│
└───lib - shared library between services within project
│    │
│    └───dynamodb - dynamoDB mapper model and table classes
│    │
│    └───docs - Swagger and related docs
│    │
│    └───schemas - Joi Schema files
│    │
│    └───utils
│
└───services - Code for APIs 
│    │
│    └───service 1
│    │    │
│    │    └───src
│    │    │     └───get.js
│    │    │     └───list.js
│    │    │     └───etc...
│    │    │
│    │    └───package.json
│    │    │
│    │    └───servless.yaml (each service is a separate CF stack)
│    │    │
│    │    └───webpack.config.js
│    │      
│    └───service 2
│
└───tests - Tests for services or utils
    