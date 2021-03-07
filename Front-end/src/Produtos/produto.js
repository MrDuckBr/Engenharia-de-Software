function cadastrarProdutos(){
  let prego = document.querySelector("#prego")
  let tijolo = document.querySelector("#tijolo")
  let cimento = document.querySelector("#cimento")
  let form = document.querySelector("#form")

  form.addEventListener("submit",function(event){
      event.preventDefault();
      
      let dados = {
        nomeProd1: "prego",
        qtd1: parseInt(prego.value),
        nomeProd2:"tijolo",
        qtd2:parseInt(tijolo.value),
        nomeProd3:"cimento",
        qtd3: parseInt(cimento.value)
         
      }

      console.log(JSON.stringify(dados))


  var xhr = new XMLHttpRequest();
  xhr.open('POST', "http://localhost:3000/produto");
  xhr.setRequestHeader('Content-type', 'application/json')
  
  

  xhr.send(JSON.stringify(dados));

  xhr.onload = function () {
      
      alert(xhr.responseText)
  };
  })
}


