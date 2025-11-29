// setTimeout (() => {
//     console.log("1. iniciando o servidor")
// },2000)

// console.log("2. exutando o servidor")

// console.log("3. encerrando o servidor")

// function assarPizza (){
//     setTimeout(() => {
//         console.log("🍕 Pizza pronta")
//     },2000);
// }

// console.log("preparando a pizza")

// assarPizza()

// console.log("comendo a pizza 🤪")


// function fazerSuco (sabor){

// }

// function callback(){

// }

// fazerSuco(callback)

// function assarPizza (callback){
//     setTimeout(() => {
//         console.log("🍕 Pizza pronta")
//         callback()
//     },2000);
// }

// function comerPizza (){
//     console.log("comendo a pizza 🤪")
// }

// console.log("Preparando pizza")

// assarPizza(comerPizza)

// let nome 

// function darNome (callback){
//     setTimeout(() => {
//         nome="Alvarez"
//         callback()
//     }, 2000);
// }

// function mostrarNome(){
//     console.log(nome)
// }

// darNome(mostrarNome)



// let usuario

// function criandoUsaario(callback){
//     setTimeout(() => {
//         usuario = {
//             nome : "Guilherme",
//             idade: 20,
//             email: "dnd@gmail.com"
//         }
//         callback()
//     },2000);
// }

// function mostrarUsuario (){
//     console.log(usuario)
// }

// criandoUsaario(mostrarUsuario)


// function verificarResultado (callbacksuccess,callbackError){
//     let result = 1 + 1

//     if (result == 2) {
//         callbacksuccess()
//     } else{
//         callbackError()
//     }
// }

// function sucesso (){
//     console.log("uhuuuul! Número 2")
// }

// function Erro (){
//     console.log("xiiiiiii,Não e 2")
// }

// verificarResultado(sucesso,Erro)

// function baixarArquivo(callback){
//     console.log("Baixando Arquivo... 📂")
    
//     setTimeout(() => {
//         console.log("Download conluido! ✅")
//         callback()
//     }, 4000);
// }

// function abrirArquivo (){
//     console.log("Abrindo arquivo... 📂")
// }

// baixarArquivo(abrirArquivo)
// let pizzaChegou = true

// const pedido = new Promise ((resolve,reject) => {
//     if (pizzaChegou == false) {
//         resolve("A pizza chegou")
//     }else{
//         reject("Pedido cancelado")
//     }
// })

// pedido
//     .then(() => {
//         console.log("DEU BOM")
//     })
//     .catch(() => {
//         console.log("DEU RUIM")
//     })


// const verificarResultado = new Promise (() => {

//     let result = 1 + 1
//     if (result == 2) {
//         resolve("uhuuuul Número 2")
        
//     }else{
//         reject("XIIII, Não é 2")
//     }
// })

// verificarResultado
//     .then((res) => {
//         console.log(res)

//     })
//     .catch ((err) => {
//         console.log(err)
//     })


// const buscarUsuario = new Promise ((resolve,reject) => {
//     console.log("Buscando usuário no banco de dados.... ⌛")
//     setTimeout(() => {
        
//         let encontrado = true
//         if (encontrado == true) {

//             resolve({nome: "Matheus", idade: 20, profissao: "Programador"})
//         }else{
//             reject("Usuário não encontrado")
//         }

//     }, 2000);
// })

// buscarUsuario
//     .then((res) => {
//         console.log(`nome do usuário ${res.nome}`)
//     })
//     .catch ((err) =>{
//         console.log(err)
//     })

const baixarArquivo = new Promise((resolve, reject) => {
    let dowload = true
    setTimeout(() => {
        if (dowload == true) {
            resolve({nome : "video.mp4",Tamanho : "150MB"})
        }else{
            reject("Falha ao baixar o arquivo")
        }
    }, 2000);
})

.then ((res) => {
    console.log(`Arquivo baixado: ${res.nome} Tamanho: ${res.Tamanho}`)
})

.catch((err)=>{
    console.log(err)
})