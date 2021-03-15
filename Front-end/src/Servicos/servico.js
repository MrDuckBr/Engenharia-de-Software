function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return  request.responseText
}

function criaLinha(usuario){
    linha = document.createElement("tr")
    tdNome = document.createElement("td")
    tdDescricao = document.createElement("td")
    botao = document.createElement("button")
    botao.setAttribute('type','button')
    botao.appendChild(document.createTextNode('Atualizar'));
    botao.onclick = function(){
        console.log(usuario)
         atualizar(usuario._id)
     }
    
    button = document.createElement("button")
    button.setAttribute('type','button')
    button.appendChild(document.createTextNode('Deletar'));
    button.onclick = function(){
        console.log(usuario._id)
        deletar(usuario._id)
    }
    tdNome.innerHTML = usuario.nomeUser
    tdDescricao.innerHTML = usuario.descricao

    linha.appendChild(tdNome)
    linha.appendChild(tdDescricao)
    linha.appendChild(botao)
    linha.appendChild(button)

    return linha
}


function criaLegenda(nome1, nome2){
    linha = document.createElement("tr")
    tdNome = document.createElement("td")
    tdDescricao = document.createElement("td")
    tdNome.innerHTML = nome1
    tdDescricao.innerHTML = nome2
    linha.appendChild(tdNome)
    linha.appendChild(tdDescricao)
    return linha
}

function main(){
    const a = fazGet("http://localhost:3000/servico/cadastrados")
    console.log(a)
     let b =JSON.parse(a)
     
     
     let tabela = document.getElementById("table")
     tabela.innerHTML = ""
     let legenda = criaLegenda("Usuário" , "Descricao")
     tabela.appendChild(legenda)
     b.forEach(element => {

        console.log(element)
         
         let linha = criaLinha(element)
         
         tabela.appendChild(linha)
         
     });
     
    
}


function table2(usuario){
    linha = document.createElement("tr")
    tdNome = document.createElement("td")
    tdDescricao = document.createElement("td")
    tdNome.innerHTML = usuario.nome
    tdDescricao.innerHTML = usuario.descricaoServico
    botao = document.createElement("button")
    botao.setAttribute('type','button')
    botao.appendChild(document.createTextNode('Cadastrar'));
    botao.onclick = function(){
        console.log(usuario)
        window.location.replace('cadastros.html')
     }

    linha.appendChild(tdNome)
    linha.appendChild(tdDescricao)
    linha.appendChild(botao)
    return linha

}

function mostraDisponiveis(){
    const a = fazGet("http://localhost:3000/servico/disponiveis")
     let b =JSON.parse(a)
     
     
     let tabela = document.getElementById("table-disponiveis")
     tabela.innerHTML = ""
     let legenda = criaLegenda("Usuário" , "Descricao")
     tabela.appendChild(legenda)
     b.forEach(element => {

        console.log(element)
         
         let linha = table2(element)
         
         tabela.appendChild(linha)
         
     });

}


function cadastrarServico(){
    let prego = document.querySelector("#prego")
    let tijolo = document.querySelector("#tijolo")
    let cimento = document.querySelector("#cimento")
    let form = document.querySelector("#form")
    let texto = document.querySelector("#caixa-texto")
  
    form.addEventListener("submit",function(event){
        event.preventDefault();

       
        let dados = {
            descricaoServico: texto.value,
            produto1Qnt: prego.value,
            produto2Qnt: tijolo.value,
            produto3Qnt: cimento.value
        }
  
        console.log(JSON.stringify(dados))
  
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:3000/servico/cadastrar/");
    xhr.setRequestHeader('Content-type', 'application/json')
    
    xhr.send(JSON.stringify(dados));
    
    xhr.onload = function () {
        console.log(xhr.status)
        if(xhr.status == 201){
            alert(xhr.responseText)
            //window.location.assign('dashBoard.html')
        }else if(xhr.status == 400){
            alert(xhr.responseText)
        }

    };
    })
  }
  
  
function servico(){
   
    window.location.replace('dashBoard.html')
}
function funcionario(){
   
    window.location.replace('../Funcionarios/dashBoardFuncionario.html')
}



function deletar(usuario){
    var xhr = new XMLHttpRequest();
    xhr.open('DELETE', "http://localhost:3000/servico/"+ usuario);
    xhr.setRequestHeader('Content-type', 'application/json')
   
   xhr.send()
    xhr.onload = function () {
        
        if(xhr.status == 200){
            alert(xhr.responseText)
           main()
        }else if(xhr.status == 400){
            alert(xhr.responseText)
        }
        
    };
 
}



function atualizar(valor){
    window.location.assign('atualizar.html?'+valor)
}

function fazAtualiza(){
    
    let prego = document.querySelector("#prego")
    let tijolo = document.querySelector("#tijolo")
    let cimento = document.querySelector("#cimento")
    let form = document.querySelector("#form")
    let texto = document.querySelector("#caixa-texto")

   form.addEventListener("submit",function(event){
       event.preventDefault();

       let dados = {
        descricaoServico: texto.value,
        produto1Qnt: prego.value,
        produto2Qnt: tijolo.value,
        produto3Qnt: cimento.value
    }

       console.log(JSON.stringify(dados))
       console.log(window.location.search.substr(1).split('&'))
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', "http://localhost:3000/servico/"+window.location.search.substr(1).split('&'));
        xhr.setRequestHeader('Content-type', 'application/json')
       
        

        xhr.send(JSON.stringify(dados));

        xhr.onload = function () {
            
            if(xhr.status == 200){
                alert(xhr.responseText)
                window.location.assign('dashBoard.html')
                main()
            }else if(xhr.status == 400){
                alert(xhr.responseText)
            }
        };
     })
}


function logout(){
    window.location.assign('../Index/index.html')
}