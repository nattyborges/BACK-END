const pessoa = {
    nome: "José",
    altura: 1.73,
    peso: 60
}
console.log(`Meu nome é ${pessoa.nome}`)

pessoa.nome = "Pedro"

console.log(pessoa.nome)

console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.altura}m e peso ${pessoa.peso}Kg.`)

//Exercício 1 

const dados = {
    nome: "José",
    idade: 30,
    altura: 1.73,
    temCNH: true,
    carro: {
        marca: "Toyota",
        modelo: "Etios",
        ano: 2020,
        potencia: 80
    },
    apelidos: ["Jr", "Juninho"]
}

let textoCNH = pessoa.temCNH ? "possui CNH" : "não possui CNH"


console.log(`${dados.nome} tem ${dados.idade} anos,
 ${dados.altura}m de altura, ${textoCNH}, e os seguintes apelidos:`)
for (let apelido of dados.apelidos) {
    console.log(`- ${apelido}`)
}

console.log(dados.carro.marca)


//Ternário
// no lugar do if 

//carro:
//marca, modelo, ano e potencia


//Desestruturação de objetos

const { nome, idade, ...outros } = dados
