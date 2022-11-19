// Creating a new function to adding more description's to our code

function appendColor (colors, color) {
    if (colors == '') {
        return colors + color
    }

    return colors + `,${color}`
}

function checkMatchLetter (guessLetter, wordLetter, colors) {
    if (guessLetter === wordLetter) {
        return appendColor(colors, 'GREEN')
    }

    return appendColor(colors, 'GRAY')
}

function isCorrectGuess (guess, word) {
    return guess === word
}

function isLetterCorrectPosition (colorsList, index) {
    return colorsList[index] === 'GREEN'
}

function checkLastGuess(guess, word) {
    var colors = ''

    if (isCorrectGuess(guess, word)) {
        return 'GREEN,GREEN,GREEN,GREEN,GREEN'
    }

    for (let index = 0; index < guess.length; index++) {
        var guessLetter = guess[index];
        var wordLetter = word[index]

        colors = checkMatchLetter(guessLetter, wordLetter, colors)
    }

    var colorsList = colors.split(',')
    for (let index = 0; index < guess.length; index++) {
        var guessLetter = guess[index];

        if (word.includes(guessLetter) && !isLetterCorrectPosition(colorsList, index)) {
            colorsList[index] = 'YELLOW'
        }
    }

    colors = colorsList.join(',')

    return colors;
}

console.log(checkLastGuess('QATAR', 'QATAR') === 'GREEN,GREEN,GREEN,GREEN,GREEN')
console.log(checkLastGuess('BRASIL', 'SERVIA') === 'GRAY,YELLOW,YELLOW,YELLOW,GREEN,GRAY')
console.log(checkLastGuess('SUIÇA', 'QATAR') === 'GRAY,GRAY,GRAY,GRAY,YELLOW')