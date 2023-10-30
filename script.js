var i = 0;
var j;
var wordArr = [];
var word;
const palavras = [
  "Amarelo",
  "Amiga",
  "Amor",
  "Ave",
  "Avião",
  "Avó",
  "Balão",
  "Bebê",
  "Bolo",
  "Branco",
  "Cama",
  "Caneca",
  "Celular",
  "Céu",
  "Clube",
  "Copo",
  "Doce",
  "Elefante",
  "Escola",
  "Estojo",
  "Faca",
  "Foto",
  "Garfo",
  "Geleia",
  "Girafa",
  "Janela",
  "Limonada",
  "Mãe",
  "Meia",
  "Noite",
  "Óculos",
  "ônibus",
  "Ovo",
  "Pai",
  "Pão",
  "Parque",
  "Passarinho",
  "Peixe",
  "Pijama",
  "Rato"
];

function sortearPalavra() {
  const indiceSorteado = Math.floor(Math.random() * palavras.length);
  return palavras[indiceSorteado];
}

function iniciarJogo() {
  word = sortearPalavra();
  console.log("palavra sorteada: " + word);

  for (let k = 0; k < 10; k++) {
    document.getElementById(k).innerHTML = "";
  }
  wordArr = [];
  i = 0;
}

const enter = () => {
  for (j = 0; j < i; j++) {
    word += wordArr[j];
  }
  console.log(word);
};

const palavra = () => {
  word = "";
  document.getElementById(i).innerHTML = k;
  wordArr.push(k);
  i++;
};

// Funções para o tecladinho funcionar
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZÇ".split("");
for (const letra of letras) {
  window["letra" + letra] = () => (k = letra);
}

iniciarJogo();
