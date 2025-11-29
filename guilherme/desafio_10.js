let nivelDeAcesso = 3

switch(nivelDeAcesso){
    case 1:
        console.log("Você é visitante só tem acesso a leitura")
        break
    case 2:
        console.log("Você é editor tem acesso limitado")
        break
    case 3:
        console.log("Você é admin tem acesso total")
        break
    default:
        console.log("Não existe essa opcão")
}