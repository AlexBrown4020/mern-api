# Life in Balance API
This is the backend repository for Life in Balance, the frontend repository can be found [here](https://github.com/AlexBrown4020/mern-client)

## Features:
- Routes for creating users and instructors
- Authentication for users and password encryption
- Creation of lessons by instructors
- Lesson joining/quitting functionality

## Future Features:
- Chat/Direct message functionality
- Class based DM features
- Profile pages
- User images
- Custom lesson images
- Implement cloud storage with Firebase

## Tech Stack:
### Languages:
- JavaScript
- NodeJS
### Frameworks:
- Express
### Libraries:
- mongoose
- nodemon
- cors
- cookie-parser
- bcryptjs
### Database:
- mongoDB
### Other:
- Heroku

## Installation
- Create a new directory within your folder (E.g. VSCode's terminal window: mkdir my-project)
- navigate to the new folder before you run installation (E.g. cd my-project)
- git clone https://github.com/AlexBrown4020/mern-api.git (Make a clone of the current project)
- Create your own .env file within the root directory
- npm i (Install all dependencies to your clone of the repository)
- Assign your own environment variable to any name you want e.g. 'mongo = 'http://example-mongo-website.com'
- Make sure to update the index.js connect function to use your name environment variable
- Assign a TOKEN_KEY in your environment variables with a string of your choice

### HTTP Requests
- You can then test if your connection is successful, by using an Insomnia/Postman server to make HTTP requests.
