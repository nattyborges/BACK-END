const pessoa = {
    nome: "José",
    idade: 30,
    cidade: "Salvador",
    profissao: "Dev"
}

const endereço = {
    rua: "Aqui",
    numero: "32",
    bairro: "Bairro legal"
}

const objetoFundido = {
    ...pessoa,
    ...endereço
}


const objetoFundido2 = {
    ...pessoa,
    ...endereço,
    novo: 20
}
console.log(objetoFundido2)
