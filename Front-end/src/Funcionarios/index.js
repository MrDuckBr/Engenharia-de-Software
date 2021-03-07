 function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return  request.responseText
}

function criaLinha(usuario){
    linha = document.createElement("tr")
    tdNome = document.createElement("td")
    tdFuncao = document.createElement("td")
    tdNome.innerHTML = usuario['0']['nome']
    tdFuncao.innerHTML = usuario['0']['funcao']

    linha.appendChild(tdNome)
    linha.appendChild(tdFuncao)

    return linha
}

function main(){
    const a = fazGet("http://localhost:3000/funcionario")
     let b =JSON.parse(a)
     
     let tabela = document.getElementById("table")
     tabela.appendChild(criaLinha(b))
    
}






function fazerPost(){
  let name =  document.querySelector("#nome-campo")
   let func = document.querySelector("#funcao-campo")
   let form = document.querySelector("#form")

   form.addEventListener("submit",function(event){
       event.preventDefault();

       let dados = {
           nome: name.value,
           funcao: func.value
       }
       console.log(JSON.stringify(dados))


        var xhr = new XMLHttpRequest();
        xhr.open('POST', "http://localhost:3000/funcionario/");
        http.setRequestHeader('Content-type', 'application/json')
       
        

        xhr.send(JSON.stringify(dados));

        xhr.onload = function () {
            
            alert(xhr.responseText)
        };
     })

   
  
}





