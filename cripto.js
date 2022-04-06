document.querySelector("form").addEventListener("submit", function(event){
  event.preventDefault();
})

function trocarTexto2(){
  document.getElementById("texto2").innerText = "Base64"
  document.getElementById("inputCesarNumber").style.display="none"
    document.getElementById("incrementoCesar").style.display="none"
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

function codificarCesar(){
  var deslocamento = parseInt(document.getElementById("inputCesarNumber").value);
  var texto = document.getElementById("codificar").value;
  var textoMinusculo = texto.toLowerCase();
  var alfabeto = "abcdefghijklmnopqrstuvxwyz".split('');
  var novaString = '';

  for(i=0; i < textoMinusculo.length; i++){ //se cair no continue volta aqui
    var letraAtual = textoMinusculo[i];
    var numeroAtualAlfabeto = alfabeto.indexOf(letraAtual); //pega o valor numerico do alfabeto
    var novoNumeroAlfabeto = (numeroAtualAlfabeto + deslocamento); //soma valor atual + o deslocamento

    if(letraAtual === ' '){
      novaString = novaString + letraAtual; 
      continue;    //necessário para não continuar executando as linhas abaixo, volta la no for
    }
    if(novoNumeroAlfabeto > 25){
      novoNumeroAlfabeto = novoNumeroAlfabeto - 26;
    }
    if(novoNumeroAlfabeto < 0){
      novoNumeroAlfabeto = novoNumeroAlfabeto + 26;
    }
    if(texto[i] === texto[i].toUpperCase()){ // compara se tem letras maiculas no texto
      novaString = novaString + alfabeto[novoNumeroAlfabeto].toUpperCase(); //se tiver inclui como maiuscula msm
    }else{
      novaString = novaString + alfabeto[novoNumeroAlfabeto]; //inclui a nova string
    }
  }
  document.getElementById("decodificar").value = novaString; //insere a novastring 

};

function decodificarCesar(){
  var deslocamento = parseInt(document.getElementById("inputCesarNumber").value); //parseInt transforma o "texto" em numero
  var texto = document.getElementById("decodificar").value;
  var textoMinusculo = texto.toLowerCase();
  var alfabeto = "abcdefghijklmnopqrstuvxwyz".split('');
  var novaString = '';

  for(i=0; i < textoMinusculo.length; i++){ //se cair no continue volta aqui
    var letraAtual = textoMinusculo[i];
    var numeroAtualAlfabeto = alfabeto.indexOf(letraAtual); //pega o valor numerico do alfabeto
    var novoNumeroAlfabeto = (numeroAtualAlfabeto - deslocamento); //diminui valor atual - o deslocamento

    if(letraAtual === ' '){
      novaString = novaString + letraAtual; 
      continue;    //necessário para não continuar executando as linhas abaixo, volta la no for
    }
    if(novoNumeroAlfabeto > 25){
      novoNumeroAlfabeto = novoNumeroAlfabeto - 26;
    }
    if(novoNumeroAlfabeto < 0){
      novoNumeroAlfabeto = novoNumeroAlfabeto + 26;
    }
    if(texto[i] === texto[i].toUpperCase()){ // compara se tem letras maiculas no texto
      novaString = novaString + alfabeto[novoNumeroAlfabeto].toUpperCase(); //se tiver inclui como maiuscula msm
    }else{
      novaString = novaString + alfabeto[novoNumeroAlfabeto]; //inclui a nova string
    }
  }
  document.getElementById("codificar").value = novaString; //insere a novastring 
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