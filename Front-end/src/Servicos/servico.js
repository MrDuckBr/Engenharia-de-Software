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
    tdFuncionario = document.createElement("td")
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
    tdFuncionario.innerHTML = usuario.nomeFunc

    linha.appendChild(tdNome)
    linha.appendChild(tdDescricao)
    linha.appendChild(tdFuncionario)
    linha.appendChild(botao)
    linha.appendChild(button)

    return linha
}


function criaLegenda(nome1, nome2, nome3){
    linha = document.createElement("tr")
    tdNome = document.createElement("td")
    tdDescricao = document.createElement("td")
    tdFuncionario = document.createElement("td")
    tdNome.innerHTML = nome1
    tdDescricao.innerHTML = nome2
    tdFuncionario.innerHTML = nome3
    linha.appendChild(tdNome)
    linha.appendChild(tdDescricao)
    linha.appendChild(tdFuncionario)
    return linha
}

function main(){
    const a = fazGet("http://localhost:3000/servico/cadastrados")
    console.log(a)
     let b =JSON.parse(a)
     
     
     let tabela = document.getElementById("table")
     tabela.innerHTML = ""
     let legenda = criaLegenda("Usuário" , "Descricao","Funcionario")
     tabela.appendChild(legenda)
     b.forEach(element => {

        console.log(element)
         
         let linha = criaLinha(element)
         
         tabela.appendChild(linha)
         
     });
     
    
}

function page(){
    main()
    mostraDisponiveis()
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
     let legenda = criaLegenda("Usuário" , "Descricao", "")
     tabela.appendChild(legenda)
     b.forEach(element => {

        console.log(element)
         
         let linha = table2(element)
         
         tabela.appendChild(linha)
         
     });

}


function cadastrarServico(){
    let form = document.querySelector("#form")
    let texto = document.querySelector("#caixa-texto")

    //Produtos
    let vet = []
    const a = document.getElementById("produtos2")
    const b = a.querySelectorAll("select")
    b.forEach(element=>{
        var itemSelecionado = element.options[element.selectedIndex].text
        vet.push(itemSelecionado)
    })
    
//funcionario
    let e = document.querySelector("#funcionario-combo")
    var funcionarioSelecionado = e.options[e.selectedIndex].text

    let s = document.querySelector("#usuario-combo")
    var usuarioSelecionado = s.options[s.selectedIndex].value



  //comeca aqui
    form.addEventListener("submit",function(event){
        event.preventDefault();

       
        let dados = {
            descricaoServico: texto.value,
            funcionario: funcionarioSelecionado,
            produtos: vet,
            usuario: usuarioSelecionado

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
                console.log(xhr.responseText)
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


function produtoBox(){
    let combo = document.getElementById("produto-combo")

    const a = fazGet("http://localhost:3000/produto")
    let b =JSON.parse(a)
    
    b.forEach(element => {
        option = document.createElement("option")
        option.innerHTML = element.nome
        
        
        combo.appendChild(option)
        
    });

}

function chamabox(){
    usuariobox()
    combobox()
    produtoBox()
    
   
}

function combobox(){
    let combo = document.getElementById("funcionario-combo")

    const a = fazGet("http://localhost:3000/funcionario")
    let b =JSON.parse(a)
    
    b.forEach(element => {
        option = document.createElement("option")
        option.innerHTML = element.nome
        
        
        combo.appendChild(option)
        
    });

}

function adicionar(){
    let combo = document.getElementById("produtos2")

    const a = fazGet("http://localhost:3000/produto")
    let b =JSON.parse(a)
    select = document.createElement("select")
    b.forEach(element => {
        
        option = document.createElement("option")
        option.innerHTML = element.nome
        select.appendChild(option)
        
        
        
        
    });
    combo.appendChild(select)

}


function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return  request.responseText
}





function usuariobox(){
    let combo = document.getElementById("usuario-combo")

    const a = fazGet("http://localhost:3000/servico/disponiveis")
    let b =JSON.parse(a)
    console.log(b)
    
    b.forEach(element => {
        //if(b.descricaoServico != null){
        option = document.createElement("option")
        option.value = element._id
        option.innerHTML = element.nome
        //}
        
        
        combo.appendChild(option)
        
    });

}



function clickUsuario(){
    let e = document.querySelector("#usuario-combo")
    var itemSelecionado = e.options[e.selectedIndex].text

    let get = fazGet('http://localhost:3000/servico/disponiveis')
    get = JSON.parse(get)
    console.log(get)
    console.log('TESTE')
    get.forEach(element=>{
        if(itemSelecionado == element.nome){
            document.getElementById('caixa-texto').value = element.descricaoServico
        }
    })

}