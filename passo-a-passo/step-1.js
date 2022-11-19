// Refactoring variable's name

function verifica(guess, word) {
    var resp = ''

    if (guess == word) {
        resp = 'GREEN,GREEN,GREEN,GREEN,GREEN'
    } else {
        for (let i = 0; i < guess.length; i++) {
            var guessLetter = guess[i];
            var wordLetter = word[i]

            if (guessLetter === wordLetter) {
                if (resp == '') {
                    resp = resp + 'GREEN'
                } else {
                    resp = resp + ',GREEN'
                }
            } else {
                if (resp == '') {
                    resp = resp + 'GRAY'
                } else {
                    resp = resp + ',GRAY'
                }
            }
        }

        var respArray = resp.split(',')
        for (let i = 0; i < guess.length; i++) {
            var guessLetter = guess[i];

            if (word.includes(guessLetter) && respArray[i] != 'GREEN') {
                respArray[i] = 'YELLOW'
            }
        }

        resp = respArray.join(',')
    }

    return resp;
}

console.log(verifica('QATAR', 'QATAR') === 'GREEN,GREEN,GREEN,GREEN,GREEN')
console.log(verifica('BRASIL', 'SERVIA') === 'GRAY,YELLOW,YELLOW,YELLOW,GREEN,GRAY')
console.log(verifica('SUIÇA', 'QATAR') === 'GRAY,GRAY,GRAY,GRAY,YELLOW')
