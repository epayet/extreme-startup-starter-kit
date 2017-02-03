// TODO this will be removed

var express = require("express");
var cookieParser = require('cookie-parser');
var session = require('express-session');

function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}
var primes = getPrimes(1000);

var answers = {
    "which of the following numbers is the largest": function(params) {
        var numbers = params.split(',');
        var actualNumbers = [];
        for(var i=0; i<numbers.length; i++) {
            var actualNumber = parseInt(numbers[i]);
            actualNumbers.push(actualNumber);
        }

        var largest = actualNumbers[0];
        for(var i=0; i<actualNumbers.length; i++) {
            if(actualNumbers[i] > largest) {
                largest = actualNumbers[i];
            }
        }

        return largest;
    },

    "which of the following numbers is both a square and a cube": function(params) {
        var numbers = params.split(',');
        var actualNumbers = [];
        for(var i=0; i<numbers.length; i++) {
            var actualNumber = parseInt(numbers[i]);
            actualNumbers.push(actualNumber);
        }

        var answerNumbers = [];
        actualNumbers.forEach(function(num) {
           if (num % 2 == 0 && num % 3 == 0) {
               answerNumbers.push(num);
           }
        });

        return answerNumbers.join(", ");
    },

    "which of the following numbers are primes": function(params) {
        var numbers = params.split(',');
        var actualNumbers = [];
        for(var i=0; i<numbers.length; i++) {
            var actualNumber = parseInt(numbers[i]);
            actualNumbers.push(actualNumber);
        }

        var answerNumbers = [];
        actualNumbers.forEach(function(num) {
            if(primes.indexOf(num) > -1) {
                answerNumbers.push(num);
            }
        });

        return answerNumbers.join(", ");
    },

    "who played James Bond in the film Dr No": function() {
        return "Sean Connery"
    },

    "who is the Prime Minister of Great Britain": function() {
        return "Theresa May";
    },

    "which city is the Eiffel tower in": function() {
        return "Paris";
    },

    "what colour is a banana": function() {
        return "yellow";
    }
};

function plus(question) {
    var numbers = question.split(" plus ");
    var split1 = numbers[0].split(" ");
    var split2 = numbers[1].split(" ");
    var num1 = parseInt(split1[split1.length - 1]);
    var num2 = parseInt(split2[0]);

    return num1 + num2;
}

function multiply(question) {
    var numbers = question.split(" multiplied by ");
    var split1 = numbers[0].split(" ");
    var split2 = numbers[1].split(" ");
    var num1 = parseInt(split1[split1.length - 1]);
    var num2 = parseInt(split2[0], 10);

    if(num2 === 0) {
        return num1
    }


    return num1 * num2;
}

/* Reimplement this function to answer questions. */
var answer = function(question, req, res) {
    var split = question.split(':');
    var actualQuestion = split[1].trim();
    var answer;

    if(actualQuestion.indexOf("plus") > -1) {
        answer = function() {
            return plus(actualQuestion);
        }
    }
    else if (actualQuestion.indexOf("multiplied") > -1) {
        answer = function() {
            return multiply(actualQuestion);
        }
    }
    else {
        answer = answers[actualQuestion];
    }

    if(answer) {
        var actualResult = "an error occured";
        try {
            var result = answer(split[2]);
            if(result) {
                actualResult = result.toString();
            }
        } catch (Error) {
            console.log(Error);
        }
        return actualResult;
    } else {
        return "";
    }
};

var app = express();
app.use(cookieParser());
app.use(session({
    "secret": "bodilpwnz",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.get("/", function(req, res) {
    var q = req.query["q"];
    var a = answer(q, req, res);
    console.log("Q: \"" + q + "\" A:\"" + a + "\"");
    res.end(a);
});

app.listen(1337, "0.0.0.0");
console.log("Server running on http://0.0.0.0:1337/");