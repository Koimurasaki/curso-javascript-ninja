# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
var emptyObject = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var person = {
  name: 'Eduardo',
  lastName: 'Fialho',
  genre: 'Male',
  age: 18,
  height: 1.78,
  weight: 94.5,
  walking: false,
  metersWalked: 0
};

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
person.makeBirthday = function() {
  person.age++;
};

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
person.walk = function(x) {
  metersWalked += x;
  person.walking = true;
};

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
person.stop = function() {
  person.walking = false;
};

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
person.completeName = function() {
  return `Olá! Meu nome é ${person.name} ${person.lastName}!`;
};

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
person.showAge = function() {
  return `Olá, eu tenho ${person.age} anos!`;
};

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
person.showWeight = function() {
  return `Eu peso ${person.weight}kg.`;
};

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
person.showHeight = function() {
  return `Minha altura é ${person.height}m.`;
};

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
person.showName(); // Olá! Meu nome é Eduardo Fialho!

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
person.showAge(); // Olá, eu tenho 19 anos!

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
person.showWeight(); // Eu peso 94.5kg.

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
person.showHeight(); // Minha altura é 1.78m.

/*
Faça a `pessoa` fazer 3 aniversários.
*/
person.makeBirthday();
person.makeBirthday();
person.makeBirthday();

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
person.showAge(); // Olá, eu tenho 21 anos!

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
person.walk(21);
person.walk(2);
person.walk(25);

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
person.walking; // true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
person.stop();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
person.walking; // false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
person.metersWalked; // 48

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
person.presentation = function () {
  var genreDifference = "o";
  if (person.genre === "Female") {
    genre = "a";
  }

  var agePlural = "anos";
  if (person.age === 1) {
    agePlural = "ano";
  }

  var meterPlural = "metros";
  if (person.metersWalked === 1) {
    meterPlural = "metro";
  }

  return (
    "Olá, eu sou " +
    `${genreDifference} ` +
    `${person.name} ${person.lastName}, tenho ${person.age} ` +
    `${agePlural}, ` +
    `${person.height}, meu peso é ${person.weight} e, só hoje, eu já caminhei ${person.metersWalked} ` + `${meterPlural}!`
  );
};

// Agora, apresente-se ;)
person.presentation();
```
