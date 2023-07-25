const valorCompra = 100
const parcelas = 10

if (parcelas === 1) {
    const desconto = valorCompra * 10 / 100
    const valorAPagar = (valorCompra - desconto).toFixed(2)
    console.log(`Você deve pagar R$ ${valorAPagar}, pois á vista tem 10% de desconto`)
}

else if (parcelas >= 2 && parcelas <= 6) {
    const valorDaParcela = (valorCompra / parcelas).toFixed(2)
    console.log(`Você deve pagar em ${parcelas} x sem juros de R$ ${valorDaParcela}`)
} else if (parcelas >= 7 && parcelas <= 12) {
    //parcelado com juros
    const valorAPagarComJuros = (valorCompra * (1 + 1 / 100) ** parcelas).toFixed(2)
    const valorParcela = (valorAPagarComJuros / parcelas).toFixed(2)
    console.log(`Você deve pagar em ${parcelas} x de R$ ${valorParcela} totalizando R$ ${valorAPagarComJuros}, devido a incidência de juros.`)
} else { // número de parcelas inválido
    console.log("Número de Parcelas inválido")
}

