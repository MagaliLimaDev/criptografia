document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
})

function codificarBase64(){
    var valorCodificado = btoa(document.getElementById("codificar").value);
    document.getElementById("decodificar").value = valorCodificado;
}


function decodificarBase64(){
    var valorDecodificado = atob(document.getElementById("decodificar").value);
    console.log(valorDecodificado);
    document.getElementById("codificar").value = valorDecodificado;
}

var dicionario = () => {
  alfabeto.set(65, 'a' || 'A');
  alfabeto.set(66, 'b' || 'B');
  alfabeto.set(67, 'c' || 'C');
  alfabeto.set(68, 'd' || 'D');
  alfabeto.set(69, 'e' || 'E');
  alfabeto.set(70, 'f' || 'F');
}
function codificarCesar(){


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