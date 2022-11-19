// Formating code (pattern)

const COLOR_GREEN = 'GREEN'
const COLOR_GRAY = 'GRAY'
const COLOR_YELLOW = 'YELLOW'

function appendColor (colors, color) {
    if (colors === '') {
        return colors + color
    }

    return colors + `,${color}`
}

function checkMatchLetter (guessLetter, wordLetter, colors) {
    if (guessLetter === wordLetter) {
        return appendColor(colors, COLOR_GREEN)
    }

    return appendColor(colors, COLOR_GRAY)
}

function isCorrectGuess (guess, word) {
    return guess === word
}

function isLetterCorrectPosition (colorsList, index) {
    return colorsList[index] === COLOR_GREEN
}

function removeLastCommon (colors) {
    return colors.substring(0, colors.length - 1)
}

function applyGreenColorToAllLetters (word) {
    const colors = `${COLOR_GREEN},`.repeat(word.length)
    return removeLastCommon(colors)
}

function checkLastGuess(guess, word) {
    let colors = ''

    if (isCorrectGuess(guess, word)) {
        return applyGreenColorToAllLetters(word)
    }

    for (let index = 0; index < guess.length; index++) {
        const guessLetter = guess[index]
        const wordLetter = word[index]

        colors = checkMatchLetter(guessLetter, wordLetter, colors)
    }

    let colorsList = colors.split(',')
    for (let index = 0; index < guess.length; index++) {
        const guessLetter = guess[index]

        if (word.includes(guessLetter) && !isLetterCorrectPosition(colorsList, index)) {
            colorsList[index] = COLOR_YELLOW
        }
    }

    return colorsList.join(',')
}

console.log(checkLastGuess('MEXICO', 'FRANÇA') === 'GRAY,GRAY,GRAY,GRAY,GRAY,GRAY')
console.log(checkLastGuess('QATAR', 'QATAR') === 'GREEN,GREEN,GREEN,GREEN,GREEN')
console.log(checkLastGuess('BRASIL', 'SERVIA') === 'GRAY,YELLOW,YELLOW,YELLOW,GREEN,GRAY')
console.log(checkLastGuess('SUIÇA', 'QATAR') === 'GRAY,GRAY,GRAY,GRAY,YELLOW')
