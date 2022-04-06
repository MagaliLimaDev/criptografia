function codificarBase64(){
    var valorCodificado = btoa(document.getElementById("codificar").value);
    document.getElementById("decodificar").value = valorCodificado;
}

function decodificarBase64(){
    var valorDecodificado = atob(document.getElementById("decodificar").value);
    console.log(valorDecodificado);
    document.getElementById("codificar").value = valorDecodificado;
}