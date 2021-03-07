function cadastroUser(){
    let nome = document.querySelector("#nome")
    let cpf = document.querySelector("#cpf")
    let email = document.querySelector("#email")
    let senha = document.querySelector("#senha")

    form.addEventListener("submit",function(event){
        event.preventDefault();

        let dados = {
            nome : nome.value,
            email : email.value,
            documento: cpf.value,
            password : senha.value
        }


    var xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:3000/user/register");
    xhr.setRequestHeader('Content-type', 'application/json')
    
    

    xhr.send(JSON.stringify(dados));

    xhr.onload = function () {
        
       if(xhr.status == 200){
           alert('Cadastro Efetuado com sucesso')
        window.location.assign('login.html')
       }
       

    };
    })
}
