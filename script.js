  var acertos = 0; 

  function pergunta1(){
    if (prompt("O sol é uma estrela? (sim/não)") == "sim") {
      alert("acertou");
      acertos++;
    } else {
      alert("melhore");
    }
  };

  function pergunta2(){
    if (prompt("A capital do Brasil é Rio de Janeiro? (sim/não)") == "não") {
      alert("acertou");
      acertos++;
    } else {
      alert("errou");
    }
  };

  function pergunta3(){
    if (prompt("Qual é a Capital da França?") == "paris") {
      alert("acertou");
      acertos++;
    } else {
      alert("melhore");
    }
  };

  function pergunta4(){
    if (prompt("2 + 2 é igual a 4? (sim/não)") == "sim") {
      alert("acertou");
      acertos++;
    } else {
      alert("melhore");
    }
  };

  function pergunta5(){
    if (prompt("Qual é a cor do céu em um dia sem nuvens?") == "azul") {
      alert("acertou");
      acertos++;
    } else {
      alert("melhore");
    }
  };

  function pergunta6(){
    if (prompt("A água ferve a 100 graus Celsius? (sim/não)") == "sim") {
      alert("acertou");
      acertos++;
    } else {
      alert("melhore");
    }
  };

  function pergunta7(){
    let resp = prompt("Qual é o maior planeta do Sistema Solar?");
    if (resp == "júpiter" || resp == "jupiter") {
      alert("acertou");
      acertos++;
    } else {
      alert("melhore");
    }
  };

  function pergunta8(){
    if (prompt("O ser humano precisa de oxigênio para viver? (sim/não)") == "sim") {
      alert("acertou");
      acertos++;
    } else {
      alert("melhore");
    }
  };

  function pergunta9(){
    let resp = prompt("Em que continente fica o Egito?");
    if (resp == "áfrica" || resp == "africa") {
      alert("acertou");
      acertos++;
    } else {
      alert("melhore");
    }
  };

  function pergunta10(){
    if (prompt("O computador entende apenas 0 e 1? (sim/não)") == "sim") {
      alert("acertou");
      acertos++;
    } else {
      alert("melhore");
    }
  };


  document.querySelector("#start").addEventListener("click", function(){
    acertos = 0; 
    pergunta1();
    pergunta2();
    pergunta3();
    pergunta4();
    pergunta5();
    pergunta6();
    pergunta7();
    pergunta8();
    pergunta9();
    pergunta10();
    alert("Quiz finalizado!\nVocê acertou " + acertos + " de 10 perguntas.");
  });



