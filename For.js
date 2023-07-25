const nomeDeEstudantes = ['José', 'João', 'Maria', 'Joana', 'André']

for (let i = 0; i < 5; i++) {
    console.log(nomeDeEstudantes[i])
}

//ou

//const nomeDeEstudantes = ['José', 'João', 'Maria', 'Joana', 'André']

//for (let i = 0; i < nomeDeEstudantes.length; i++) {
//console.log(nomeDeEstudantes[i])
//}



//While
//console.log("While")

//let indice = 0

//while (indice < nomesDeEstudantes.length) {
//console.log(nomesDeEstudantes[indice])
//    indice++
//}

//Exercício 

console.log('Exercício Array e For')

const numeros = [5, 9, 17, 23, 35, 47]

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

console.log('Exercício 3 Array e For')

let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i]
    //soma+= numeros[i]
}
console.log(soma)


//For of

for (let nome of nomeDeEstudantes) {
    console.log(nome)
}


for (let numero of numeros) {
    console.log(numero)
}

//Exercício 5


for (let i = 10; i >= 0; i--) {
    console.log(i)
}


//Exercício 6


for (let i = 0; i <= 50; i += 2) {
    console.log(i)
}


//WHILE

let numero = 2

while (numero <= 50) {
    console.log(numero)
    numero += 2
}