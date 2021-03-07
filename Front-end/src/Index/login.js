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
            if(xhr.responseText){
                window.location.assign('../Servicos/dashboard.html')
            }else{
                window.location.assign('solicitarServico.html')
            }
            alert("Logado com Sucesso!")
        }
        
    };
    })
}


