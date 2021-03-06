let axios = require('axios')

axios.get('http://localhost:3000/funcionario')
.then((data) => {
    console.log(data.nome)
})