let operacao = 5
let num1 = 10
let num2 = 20


switch(operacao){
    case 1:
        console.log(`Mutiplicação ${num1 * num2}`)
        break
    case 2:
        console.log(`Divisão ${num1 / num2}`)
        break
    case 3:
        console.log(`Mais ${num1 + num2}`)
        break
    case 4:
        console.log(`Menos ${num1 - num2}`)
        break
    default:
        console.log("Não existe essa opção")
}