fetch("https://jsonplaceholder.typicode.com/users")
    .then(() => res.json ())
    .then((data) => {
        console.log(data)
    })
// const cep = new Promise((resolve, reject) => {
    
// })