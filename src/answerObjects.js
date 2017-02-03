/*
An answer object contains at least 2 methods:
- isItMeYouReLookingFor(question): returns true if this answerObject is related to the question
- compute(question): actual computation of the question, your logic goes here
 */

var NameAnswer = {
    isItMeYouReLookingFor: function(question) {
        return question == "what is your name";
    },

    compute: function(question) {
        return "ninja";
    }
};

// Add your answer objects here
module.exports = [
    NameAnswer
];