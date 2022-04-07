function codificarCesar(){
    var deslocamento = parseInt(document.getElementById("inputCesarNumber").value);
    deslocamento = deslocamento % 26;
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
    deslocamento = deslocamento % 26; 
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