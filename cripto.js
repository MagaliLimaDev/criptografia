document.querySelector("form").addEventListener("submit", function(event){
  event.preventDefault();
})

function trocarTexto2(){
  document.getElementById("texto2").innerText = "Base64"
  document.getElementById("inputCesarNumber").style.display="none"
    document.getElementById("incrementoCesar").style.display="none"
}

function inserirCampo(){
  document.getElementById("texto2").innerText = "Cifra de César"
  if(!document.getElementById("inputCesarNumber")){
    var inputCesar = document.createElement("input");
    inputCesar.type = "number";
    inputCesar.id="inputCesarNumber"
    var incremento = document.createElement("label");
    incremento.innerText = "Adicione o Incremento: "
    incremento.id = "incrementoCesar"
    document.getElementById("divCifra").appendChild(incremento);
    document.getElementById("divCifra").appendChild(inputCesar);
    document.getElementById("inputCesarNumber").style.display="block"
    document.getElementById("incrementoCesar").style.display="block"

  }else{
    document.getElementById("inputCesarNumber").style.display="block"
    document.getElementById("incrementoCesar").style.display="block"
  }
  }

function verificarEncode(){
    var elemento = document.getElementsByName("cripto");

    for (var i = 0; i < elemento.length; i++) {
        if (elemento[i].checked) {
          if(elemento[i].value == "cesar"){
            codificarCesar();
          }else{
            codificarBase64();
          }
          break;
        }
    }

}
function verificarDecode(){
    var elemento = document.getElementsByName("cripto");

    for (var i = 0; i < elemento.length; i++) {
        if (elemento[i].checked) {
          if(elemento[i].value == "cesar"){
            decodificarCesar();
          }else{
            decodificarBase64();
          }
          break;
        }
    }

}