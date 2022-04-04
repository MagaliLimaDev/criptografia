document.querySelector("form").addEventListener("submit", function(event){
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

var alfabeto = () => {
  alfabeto.set(65, 'a' || 'A');
  alfabeto.set(66, 'b' || 'B');
  alfabeto.set(67, 'c' || 'C');
  alfabeto.set(68, 'd' || 'D');
  alfabeto.set(69, 'e' || 'E');
  alfabeto.set(70, 'f' || 'F');
  alfabeto.set(71, 'g' || 'G');
  alfabeto.set(72, 'h' || 'H');
  alfabeto.set(73, 'i' || 'I');
  alfabeto.set(74, 'j' || 'J');
  alfabeto.set(75, 'k' || 'K');
  alfabeto.set(76, 'l' || 'L');
  alfabeto.set(77, 'm' || 'M');
  alfabeto.set(78, 'n' || 'N');
  alfabeto.set(79, 'o' || 'O');
  alfabeto.set(80, 'p' || 'P');
  alfabeto.set(81, 'q' || 'Q');
  alfabeto.set(82, 'r' || 'R');
  alfabeto.set(83, 's' || 'S');
  alfabeto.set(84, 't' || 'T');
  alfabeto.set(85, 'u' || 'U');
  alfabeto.set(86, 'v' || 'V');
  alfabeto.set(87, 'w' || 'W');
  alfabeto.set(88, 'x' || 'X');
  alfabeto.set(89, 'y' || 'Y');
  alfabeto.set(90, 'z' || 'Z');
  return alfabeto;
}

function inserirCampo(){
  var inputCesar = document.createElement("input");
  inputCesar.type = "number";
  document.getElementById("divCifra").appendChild(inputCesar);
  
}



function codificarCesar(){
  var cesar = document.getElementById("cifra");
  for (var i = 0; i< cesar.length; i++);

  

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