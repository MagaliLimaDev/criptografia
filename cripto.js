document.querySelector("form").addEventListener("submit", function(event){
  event.preventDefault();
})

function trocarTexto2(){
  document.getElementById("texto2").innerText = "Base64"
}

function codificarBase64(){
    var valorCodificado = btoa(document.getElementById("codificar").value);
    document.getElementById("decodificar").value = valorCodificado;
}

function decodificarBase64(){
    var valorDecodificado = atob(document.getElementById("decodificar").value);
    console.log(valorDecodificado);
    document.getElementById("codificar").value = valorDecodificado;
}

function inserirCampo(){
  var inputCesar = document.createElement("input");
  inputCesar.type = "number";
  inputCesar.id="inputCesarNumber"
  var incremento = document.createElement("label");
  incremento.innerText = "Adicione o Incremento: "
  document.getElementById("divCifra").appendChild(incremento);
  document.getElementById("divCifra").appendChild(inputCesar);
  document.getElementById("texto2").innerText = "Cifra de César"
}

function codificarCesar(){
  var deslocamento = document.getElementById("inputCesarNumber").value;
  var texto = getElementById("codificar").value;
  var textoMinusculo = texto.toLowerCase();
  var alfabeto = "abcdefghijklmnopqrstuvxwyz".split('');
  var novaString = '';
}

function decodificarCesar(){

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