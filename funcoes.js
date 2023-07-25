const pessoa1 = {
    nome: "José",
    idade: 30,
    profissão: "professor"
}
function apresentar(pessoa) {
    if (pessoa.idade < 21) {
        console.log(`Meu nome é ${pessoa.nome}, sou um(a) jovemm de ${pessoa.idade} anos 
        e sou ${pessoa.profissão}.`)
    } else if (pessoa.idade < 65) {
        console.log(`Meu nome é ${pessoa.nome}, sou um(a) adulto(a) de ${pessoa.idade} anos 
        e sou ${pessoa.profissão}.`)
    } else {
        console.log(`Meu nome é ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos 
        e sou ${pessoa.profissão}.`)
    }
}
//console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos 
//e sou ${pessoa.profissão}.`)

const pessoa2 = {
    nome: "Pedro",
    idade: 65,
    profissão: "médico"
}

const pessoa3 = {
    nome: "Ana",
    idade: 19,
    profissão: "estudante"
}

apresentar(pessoa1)
apresentar(pessoa2)
apresentar(pessoa3)

//CRIAR UMA FUNÇÃO QUE IMPRIME OLÁ NA TELA

//função declarada
function imprimirOla() {
    console.log("Olá!")
}

//executar função 

imprimirOla()

function cumprimentar(pessoa, idade) {
    console.log(`Olá, ${pessoa}! Fiquei sabendo que você tem ${idade} anos.`)
}

cumprimentar("José", 30)
cumprimentar("Pedro", 20)
cumprimentar("Ana", 15)
cumprimentar("Maria", 52)


