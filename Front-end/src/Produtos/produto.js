function cadastrarProdutos(){
  let prego = document.querySelector("#prego")
  let tijolo = document.querySelector("#tijolo")
  let cimento = document.querySelector("#cimento")
  let form = document.querySelector("#form")

  form.addEventListener("submit",function(event){
      event.preventDefault();

      let dados = {
          prego : prego.value,
          tijolo : tijolo.value,
          cimento : cimento.value
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


