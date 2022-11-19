// Creating a new function, removing if's aninhados and duplicated code

function appendColor (colors, color) {
    if (colors == '') {
        return colors + color
    }

    return colors + `,${color}`
}

function checkLastGuess(guess, word) {
    var colors = ''

    if (guess == word) {
        return 'GREEN,GREEN,GREEN,GREEN,GREEN'
    }

    for (let i = 0; i < guess.length; i++) {
        var guessLetter = guess[i];
        var wordLetter = word[i]

        if (guessLetter === wordLetter) {
            colors = appendColor(colors, 'GREEN')
        } else {
            colors = appendColor(colors, 'GRAY')
        }
    }

    var colorsList = colors.split(',')
    for (let i = 0; i < guess.length; i++) {
        var guessLetter = guess[i];

        if (word.includes(guessLetter) && colorsList[i] != 'GREEN') {
            colorsList[i] = 'YELLOW'
        }
    }

    colors = colorsList.join(',')

    return colors;
}

console.log(checkLastGuess('QATAR', 'QATAR') === 'GREEN,GREEN,GREEN,GREEN,GREEN')
console.log(checkLastGuess('BRASIL', 'SERVIA') === 'GRAY,YELLOW,YELLOW,YELLOW,GREEN,GRAY')
console.log(checkLastGuess('SUIÇA', 'QATAR') === 'GRAY,GRAY,GRAY,GRAY,YELLOW')