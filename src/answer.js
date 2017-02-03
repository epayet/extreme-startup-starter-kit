var answerObjects = require('./answerObjects');

// You might want to do some filtering on the original question, like stripping off the id, etc.
function getActualQuestion(question) {
    return question;
}

var AnswerFactory = {
    get: function(question) {
        for(var i = 0; i < answerObjects.length; i++) {
            var actualQuestion = getActualQuestion(question);
            if(answerObjects[i].isItMeYouReLookingFor(actualQuestion)) {
                return answerObjects[i];
            }
        }

        throw Error("Could not find any answer object related to question: " + question);
    }
};

function getAnswer(question) {
    var answerObject = AnswerFactory.get(question);
    return answerObject.compute(question).toString();
}

module.exports = getAnswer;