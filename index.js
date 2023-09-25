/*Calculadora de convidados */
function calcular() {
  let convidados = Number(document.getElementById("recebeConvidados").value);
  let resultadoElement = document.getElementById("resultado");
  let produtos = [];

  //Adicionando os elemento dentro da Array
  if (document.getElementById("recebeSalgado").checked) {
    produtos.push("Salgados");
  }

  if (document.getElementById("recebeDoce").checked) {
    produtos.push("Doces");
  }

  if (document.getElementById("recebeBolo").checked) {
    produtos.push("Bolo");
  }

  //Calculando as quantidades por convidados
  if (convidados > 0) {
    if (
      produtos.includes("Salgados") &&
      produtos.includes("Doces") &&
      produtos.includes("Bolo")
    ) {
      var quantidadeSalgados = convidados * 10;
      var quantidadeDoces = convidados * 5;
      var quantidadeBolo = convidados * 1;
      var pesoBolo = quantidadeBolo * 100;
      resultadoElement.innerHTML = `${quantidadeSalgados} Salgados, ${quantidadeDoces} Doces e ${quantidadeBolo} fatias de bolo (100g cada) igual à ${pesoBolo} gramas`;
    } else if (produtos.includes("Salgados") && produtos.includes("Doces")) {
      var quantidadeSalgados = convidados * 13;
      var quantidadeDoces = convidados * 6;
      resultadoElement.innerHTML = `${quantidadeSalgados} Salgados, ${quantidadeDoces} Doces`;
    } else if (produtos.includes("Salgados") && produtos.includes("Bolo")) {
      var quantidadeSalgados = convidados * 12;
      var quantidadeBolo = convidados * 1;
      var pesoBolo = quantidadeBolo * 100;
      resultadoElement.innerHTML = `${quantidadeSalgados} Salgados, ${quantidadeBolo} fatias de bolo (100g cada) igual à ${pesoBolo} gramas`;
    } else if (produtos.includes("Doces") && produtos.includes("Bolo")) {
      var quantidadeDoces = convidados * 6;
      var quantidadeBolo = convidados * 1;
      var pesoBolo = quantidadeBolo * 100;
      resultadoElement.innerHTML = `${quantidadeDoces} Doces e ${quantidadeBolo} fatias de bolo (100g cada) igual à ${pesoBolo} gramas`;
    } else if (produtos.includes("Salgados")) {
      var quantidadeSalgados = convidados * 15;
      resultadoElement.innerHTML = `${quantidadeSalgados} Salgados`;
    } else if (produtos.includes("Doces")) {
      var quantidadeDoces = convidados * 7;
      resultadoElement.innerHTML = `${quantidadeDoces} Doces`;
    } else if (produtos.includes("Bolo")) {
      var quantidadeBolo = convidados * 1;
      var pesoBolo = quantidadeBolo * 100;
      resultadoElement.innerHTML = `${quantidadeBolo} fatias de bolo (100g cada) igual à ${pesoBolo} gramas`;
    }
  } else {
    resultadoElement.innerHTML = `Insira à quantidade de convidados.`;
  }
}
