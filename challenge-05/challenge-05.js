/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var variableAny = ["String", 0, undefined, false, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(array) {
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(variableAny)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function valueFinder(array, index) {
  return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var anotherVar = [true, { a: 1 }, 1, null, ["Array"]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
valueFinder(anotherVar, 0);
valueFinder(anotherVar, 1);
valueFinder(anotherVar, 2);
valueFinder(anotherVar, 3);
valueFinder(anotherVar, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
  var bookList = {
    "Rascal Does Not Dream, Vol. 1": {
      quantityPages: 240,
      author: "Hajime Kamoshida",
      publisher: "Yen On",
    },
    "Re:Zero: Starting Life in Another World, Vol. 1": {
      quantityPages: 240,
      author: "Tappei Nagatsuki",
      publisher: "Yen On",
    },
    "Konosuba: God's Blessing on This Wonderful World!, Vol. 1": {
      quantityPages: 176,
      author: "Natsume Akatsuki",
      publisher: "Yen On",
    },
  };

  return !bookName ? bookList : bookList[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = "Rascal Does Not Dream, Vol. 1";
console.log(
  `O livro ${bookName} tem ${
    book("Rascal Does Not Dream, Vol. 1").quantityPages
  } páginas!`
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(
  `O autor do livro ${bookName} é ${
    book("Rascal Does Not Dream, Vol. 1").author
  }.`
);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
  `O livro ${bookName} foi publicado pela editora ${
    book("Rascal Does Not Dream, Vol. 1").publisher
  }.`
);
