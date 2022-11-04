# Chat App
This is a in-development chat and instant messaging app.

## Demo
https://mathealves.github.io/chat-app/

## Features
### account registration
  the login screen doubles as registration screen:  
  when a non-existent username is given, it automatically creates a new user
### global chat
  all new users are automaticaly added to main chat room

## Planned features
- add contacts
- private messages

## Run Locally
### install dependencies
### `npm i`

### connect with Chat Engine account
To hook up the application with your [Chat Engine](https://chatengine.io/) account, create a new project and new chat that will serve as your main room.  
Create a .env file at app root with this info:  
REACT_APP_PROJECT_KEY={PROJECT PRIVATE KEY}  
REACT_APP_PROJECT_ID={PROJECT ID}  
REACT_APP_ADMIN_USERNAME={CHAT ADMIN USERNAME}  
REACT_APP_ADMIN_PASSWORD={CHAT ADMIN SECRET}   
REACT_APP_MAIN_ROOM={CHAT ID}  

## Scripts

### `npm start`

## Reference
[Chat Engine](https://chatengine.io/)  
[adrianhajdin/chat_application](https://github.com/adrianhajdin/chat_application)
