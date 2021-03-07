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
