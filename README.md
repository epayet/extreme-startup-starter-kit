# Extreme Startup

This is my first version of the extreme startup game 
(https://blog.codecentric.de/en/2015/06/extreme-startup-at-codecentric/)

## What is Extreme Startup?

It is like a code dojo, but with a competition twist. 
You create a http server, and you have to be able to respond to some questions. 

You get points when it's correct, you loose points when it's wrong. You loose many points if you have a http error.

You can choose your language as long as you are able to respond to the http requests.

## Example

To the question: `GET http://yourip:port/?q=what-is-your-name`,
your server has to be able to respond: `my team name`

## Then what is this repo?

It is my first version of it in Node. Yeah it's not great. 
I was pairing with someone, and we spent a lot of time setting up the API more than answering questions.
I kept it as it is so I could learn from it, and be more prepared next time.

For a better version of this, see the master branch

## What do I take from this?

We should have paired more. 
One could focus on making the API resilient, and the other one on the questions themselves.

We lost a lot of points in the beginning because of 500 errors.