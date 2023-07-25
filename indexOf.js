// saber se um email é válido
//tem que ter um arroba
//tem q ter um . depois do @

const possivelEmail = "jose.messias@cubos.academy"

const indexArroba = possivelEmail.indexOf("@")

const indexPontoAposArroba = possivelEmail.indexOf(".", indexArroba)

if (indexPontoAposArroba > indexArroba) {
    console.log("Email atende as requisições")
} else {
    console.log("Não há nenhum ponto após o arroba.")
}
