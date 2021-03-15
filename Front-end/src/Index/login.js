function login(){
    let email = document.querySelector("#email")
    let senha = document.querySelector("#senha")
    let form = document.querySelector("#form")

    form.addEventListener("submit",function(event){
        event.preventDefault();

        let dados = {
            email : email.value,
            password : senha.value
        }
        console.log(JSON.stringify(dados))


    var xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:3000/user/login");
    xhr.setRequestHeader('Content-type', 'application/json')
    
    

    xhr.send(JSON.stringify(dados));

    xhr.onload = function () {
        if(xhr.status == 200){
            alert("Logado com Sucesso!")    
            window.location.assign('http://localhost:5000/Servicos/dashBoard.html')
        }else{
            alert("Erro ao realizar o login: " + xhr.responseText)
           
            
            
        }
        
    };
    })
}


