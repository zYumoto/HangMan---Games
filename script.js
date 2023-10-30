var i = 0;
var j;
var wordArr = [];
var word;
const palavras = [
  { palavra: "Amarelo", categoria: "Cores" },
  { palavra: "Amiga", categoria: "Relações" },
  { palavra: "Amor", categoria: "Sentimentos" },
  { palavra: "Ave", categoria: "Animais" },
  { palavra: "Avião", categoria: "Transportes" },
  { palavra: "Avó", categoria: "Família" },
  { palavra: "Balão", categoria: "Objetos" },
  { palavra: "Bebê", categoria: "Família" },
  { palavra: "Bolo", categoria: "Comida" },
  { palavra: "Branco", categoria: "Cores" },
  { palavra: "Cama", categoria: "Móveis" },
  { palavra: "Caneca", categoria: "Objetos" },
  { palavra: "Celular", categoria: "Tecnologia" },
  { palavra: "Céu", categoria: "Natureza" },
  { palavra: "Clube", categoria: "Entretenimento" },
  { palavra: "Copo", categoria: "Utensílios" },
  { palavra: "Doce", categoria: "Comida" },
  { palavra: "Elefante", categoria: "Animais" },
  { palavra: "Escola", categoria: "Educação" },
  { palavra: "Estojo", categoria: "Material Escolar" },
  { palavra: "Faca", categoria: "Utensílios" },
  { palavra: "Foto", categoria: "Fotografia" },
  { palavra: "Garfo", categoria: "Utensílios" },
  { palavra: "Geleia", categoria: "Comida" },
  { palavra: "Girafa", categoria: "Animais" },
  { palavra: "Janela", categoria: "Casa" },
  { palavra: "Limonada", categoria: "Bebidas" },
  { palavra: "Mãe", categoria: "Família" },
  { palavra: "Meia", categoria: "Vestuário" },
  { palavra: "Noite", categoria: "Tempo" },
  { palavra: "Óculos", categoria: "Acessórios" },
  { palavra: "ônibus", categoria: "Transportes" },
  { palavra: "Ovo", categoria: "Comida" },
  { palavra: "Pai", categoria: "Família" },
  { palavra: "Pão", categoria: "Comida" },
  { palavra: "Parque", categoria: "Lazer" },
  { palavra: "Passarinho", categoria: "Animais" },
  { palavra: "Peixe", categoria: "Animais" },
  { palavra: "Pijama", categoria: "Vestuário" },
  { palavra: "Rato", categoria: "Animais" }
];

function sortearPalavra() {
  const indiceSorteado = Math.floor(Math.random() * palavras.length);
  return palavras[indiceSorteado];
}

function iniciarJogo() {
  const palavraSorteada = sortearPalavra();
  word = palavraSorteada.palavra;
  const categoria = palavraSorteada.categoria;
  console.log("Nova palavra sorteada: " + word);
  console.log("Categoria: " + categoria);

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
}

// Funcão Letras
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZÇ".split("");
for (const letra of letras) {
  window["letra" + letra] = () => (k = letra);
}

iniciarJogo();
