// const id = document.getElementById("id")
// const nome = document.getElementById("nome")
// const username = document.getElementById("username")
// const telefone = document.getElementById("telefone")
// const rua = document.getElementById("rua")
// const cidade = document.getElementById("cidade")
// const zipcode =document.getElementById("zipcode")
// const website = document.getElementById("website")


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json ())
//     .then((data) => {
//         console.log(data)
//         id.innerText =`id do usuário ${data[0].id}`
//         nome.innerText =`nome do usuário ${data[0].name}`
//         username.innerText =`username do usuário ${data[0].username}`
//         telefone.innerText =`telefone do usuário ${data[0].phone}`
//         rua.innerText = `rua do usuário ${data[0].address.street}`
//         cidade.innerText = `cidade do usuário ${data[0].address.city}`
//         zipcode.innerText = `zipcode do usuário ${data[0].address.zipcode}`
//         website.innerText = `website do usuário ${data[0].website}`
//     })

// // const cep = new Promise((resolve, reject) => {

const statuss = document.getElementById("statuss")
const nome = document.getElementById("nome")
const localização = document.getElementById("localização")
const espécie = document.getElementById("espécie")
const rick = document.getElementById("rick")

fetch("https://rickandmortyapi.com/api/character")
.then ((res) => res.json ())
.then((data) => {
    console.log(data.results[0])
    statuss.innerText = `status do individuo ${data.results[0].status}`
    nome.innerText = `nome do individuo ${data.results[0].name}`
    localização.innerText = `localização do individuo ${data.results[0].location.name}`
    espécie.innerText = `espécie do individuo ${data.results[0].species}`
})