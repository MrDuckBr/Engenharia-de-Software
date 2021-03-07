function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return  request.responseText
}

function criaLinha(usuario,valor){
    linha = document.createElement("tr")
    tdNome = document.createElement("td")
    tdDescricao = document.createElement("td")
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
    tdDescricao.innerHTML = usuario.descricaoServico

    linha.appendChild(tdNome)
    linha.appendChild(tdDescricao)
    linha.appendChild(botao)
    linha.appendChild(button)

    return linha
}

function main(){
    const a = fazGet("http://localhost:3000/servico/listar")
     let b =JSON.parse(a)
     
     
     let tabela = document.getElementById("table")
     tabela.innerHTML = ""
     b.forEach(element => {

        console.log(element)
         let valor = element['0']['_id']
         let linha = criaLinha(element, valor)
         
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
            descricao: texto.value,
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
        
        alert(xhr.responseText)
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
    xhr.open('DELETE', "http://localhost:3000/funcionario/"+ usuario);
    xhr.setRequestHeader('Content-type', 'application/json')
   
   xhr.send()
    xhr.onload = function () {
        
        alert('Funcionario Deletado')
        main()
        
    };
 
}