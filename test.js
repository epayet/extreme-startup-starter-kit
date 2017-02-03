var question = "3fca4cf0: which of the following numbers is both a square and a cube: 729, 938";

function square(params) {
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
}

var result = square("729, 938");
console.log(result)
