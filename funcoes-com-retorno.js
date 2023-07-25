//VERIFICAR MAIORIDADE

function verificarMaioridade(idade) {
    if (idade >= 18) {
        //é maior de idade
        return true
    } else {
        //não é maior de idade
        return false
    }
}

const valorRetornadoPelaFunção = verificarMaioridade(20)

// ex 2 

function verificarFaixaEtaria(idade) {
    if (idade >= 21) {
        return "você é jovem!"
    } else {
        if (idade < 66) {
            return "Você é adulto!"
        } else {
            return "Você é idoso"
        }
    }
}


console.log(verificarFaixaEtaria(18))