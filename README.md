# Extreme Startup

This is a starter kit for the extreme startup game 
(https://blog.codecentric.de/en/2015/06/extreme-startup-at-codecentric/), only in NodeJS for now.

## What is Extreme Startup?

It is like a code dojo, but with a competition twist. 
You create a http server, and you have to be able to respond to some questions. 

You get points when it's correct, you loose points when it's wrong. You loose many points if you have a http error.

You can choose your language as long as you are able to respond to the http requests.

### Example

To the question: `GET http://yourip:port/?q=what-is-your-name`,
your server has to be able to respond: `my team name`

## How to use it

The main thing you will have to edit is: `src/answerObjects.js`. 
Everything is explained in the file, and it's great for pairing. 
Different people can focus on different objects an the same time.

Start the server with: `npm start`. Nodemon is used to restart automatically the server when is file is changed.

## Versions

* First try at this game ever: https://github.com/epayet/extreme-startup-starter-kit/tree/1.0