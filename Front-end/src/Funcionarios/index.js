var idFunc = ""
 
 function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return  request.responseText
}

function criaLinha(usuario,valor){
    linha = document.createElement("tr")
    tdNome = document.createElement("td")
    tdFuncao = document.createElement("td")
    tdAvaiable = document.createElement("td")
    botao = document.createElement("button")
    botao.setAttribute('type','button')
    botao.appendChild(document.createTextNode('Atualizar'));
    botao.onclick = function(){
        console.log(valor)
         atualizar(valor)
     }
    
    button = document.createElement("button")
    button.setAttribute('type','button')
    button.appendChild(document.createTextNode('Deletar'));
    button.onclick = function(){
       console.log(valor)
        deletar(valor)
    }
    tdNome.innerHTML = usuario.nome
    tdFuncao.innerHTML = usuario.funcao
    console.log(usuario.avaiable)
    if(usuario.avaiable){
        tdAvaiable.innerHTML = 'Disponivel'
        
    }
    if(!usuario.avaiable){
        tdAvaiable.innerHTML = 'Indisponivel'
    }
    
    

    linha.appendChild(tdNome)
    linha.appendChild(tdFuncao)
    linha.appendChild(tdAvaiable)
    linha.appendChild(botao)
    linha.appendChild(button)

    return linha
}

function main(){
    const a = fazGet("http://localhost:3000/funcionario")
     let b =JSON.parse(a)
     
     
     let tabela = document.getElementById("table")
     tabela.innerHTML = ""
     let legenda = criaLegenda("FUNCIONÁRIO" , "FUNÇÃO","DISPONIBILIDADE")
     tabela.appendChild(legenda)
     b.forEach(element => {
         let valor = element._id
         let linha = criaLinha(element, valor)
         
         tabela.appendChild(linha)
         
     });
     
    
}


function criaLegenda(nome1, nome2, nome3){
    linha = document.createElement("tr")
    tdNome = document.createElement("td")
    tdDescricao = document.createElement("td")
    tdDisponivel = document.createElement("td")
    tdNome.innerHTML = nome1
    tdDescricao.innerHTML = nome2
    tdDisponivel.innerHTML = nome3
    linha.appendChild(tdNome)
    linha.appendChild(tdDescricao)    
    linha.appendChild(tdDisponivel)    

    return linha
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
        xhr.setRequestHeader('Content-type', 'application/json')
       
        

        xhr.send(JSON.stringify(dados));

        xhr.onload = function () {
            
            alert('Funcionario Cadastrado')
            window.location.assign('dashBoardFuncionario.html')
        };
     })

   
  
}




function deletar(usuario){
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', "http://localhost:3000/funcionario/"+ usuario);
    xhr.setRequestHeader('Content-type', 'application/json')
   
   xhr.send()
    xhr.onload = function () {
        
        alert('Funcionario Deletado')
        main()
        
    };
 
}



function fazAtualiza(idFunc){
    
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
       console.log(idFunc)
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', "http://localhost:3000/funcionario/"+window.location.search.substr(1).split('&'));
        xhr.setRequestHeader('Content-type', 'application/json')
       
        

        xhr.send(JSON.stringify(dados));

        xhr.onload = function () {
            
            alert('Funcionario Atualizado')
            window.location.assign('dashBoardFuncionario.html')
            main()
        };
     })
}

function atualizar(valor){
    console.log(valor + "arroz comi to com fome")
    window.location.assign('atualizarFuncionario.html?'+valor)
    

}



function logout(){
    window.location.assign('../Index/index.html')
}