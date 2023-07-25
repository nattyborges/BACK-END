const palavra = 'Alemanha';

let encontrado = false

for (let letra of palavra) {
    if (letra === 'h') {
        console.log('Tem a letra h')
        encontrado = true
        break;
    }
}

if (!encontrado) {
    console.log('Não tem h')
}

console.log('Exercício 4')

const palavra2 = 'abracadabra'

let quantidade = 0

for (let letra of palavra2) {
    if (letra === 'a') {
        quantidade++
    }
}

console.log(quantidade)
