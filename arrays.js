

const nomesDeEstudantes = ['José', 'João', 'Maria']
const notasDosAlunos = [15, 63, 52]

console.log(nomesDeEstudantes)
console.log(nomesDeEstudantes[0])
console.log(nomesDeEstudantes[3])

console.log(notasDosAlunos)


//Lenght
console.log('Lenght')

nomesDeEstudantes[nomesDeEstudantes.length] = 'Pedro'
console.log(nomesDeEstudantes)

//Push
console.log('Push')

nomesDeEstudantes.push('Pedro')
console.log(nomesDeEstudantes)

//Pop
console.log('Pop')

nomesDeEstudantes.pop()
console.log(nomesDeEstudantes)

//Shift
console.log('Shift')

nomesDeEstudantes.shift()
console.log(nomesDeEstudantes)

//Unshift
console.log('Unshift')

nomesDeEstudantes.unshift('José')
console.log(nomesDeEstudantes)


//Exercício
console.log("Exercício")

const paises = ['Brasil', 'Argentina', 'Paraguai', 'Chile', 'Colômbia']
console.log(paises)

paises.push('Equador')
console.log(paises)

paises.pop()
console.log(paises)

paises.unshift('Peru')
console.log(paises)

paises.shift()
console.log(paises)

const ultimo = paises[paises.length - 1]
console.log(ultimo)

console.log(paises[1])

console.log(paises[2])


//While
console.log("While")

let indice = 0

while (indice < nomesDeEstudantes.length) {
    console.log(nomesDeEstudantes[indice])
    indice++
}

//teste 