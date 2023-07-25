const pessoa1 = {
    nome: "José",
    idade: 30,
    profissão: "professor",
    apresentar: function () {
        const faixaEtaria = this.determinarFaixaEtaria(this.idade)

        console.log(`Sou ${this.nome}, um(a) ${faixaEtaria} de ${this.idade} anos e sou ${this.profissão}.`)
    },
    determinarFaixaEtaria: function () {
        if (this.idade <= 21) {
            return "jovem!"
        } else {
            if (this.idade < 66) {
                return "adulto!"
            } else {
                return "idoso"
            }
        }
    }
}

pessoa1.apresentar()
console.log(pessoa1.determinarFaixaEtaria())

