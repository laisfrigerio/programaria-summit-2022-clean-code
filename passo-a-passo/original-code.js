function verifica(c, p) {
    var resp = ''

    if (c == p) {
        resp = 'GREEN,GREEN,GREEN,GREEN,GREEN'
    } else {
        for (let i = 0; i < c.length; i++) {
            var cLetra = c[i];
            var pLeta = p[i]

            if (cLetra === pLeta) {
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
        for (let i = 0; i < c.length; i++) {
            var cLetra = c[i];

            if (p.includes(cLetra) && respArray[i] != 'GREEN') {
                respArray[i] = 'YELLOW'
            }
        }

        resp = respArray.join(',')
    }

    return resp;
}

console.log(verifica('MEXICO', 'FRANÇA') === 'GRAY,GRAY,GRAY,GRAY,GRAY,GRAY')
console.log(verifica('QATAR', 'QATAR') === 'GREEN,GREEN,GREEN,GREEN,GREEN')
console.log(verifica('BRASIL', 'SERVIA') === 'GRAY,YELLOW,YELLOW,YELLOW,GREEN,GRAY')
console.log(verifica('SUIÇA', 'QATAR') === 'GRAY,GRAY,GRAY,GRAY,YELLOW')