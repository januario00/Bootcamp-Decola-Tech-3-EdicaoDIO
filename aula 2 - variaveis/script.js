// tipos primitivos
// boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'Daniele';
console.log(typeof(nome));

//como declarar variáveis
var variavel = 'Daniele';
variavel = 'Daniele Januario';
console.log(variavel);

let variavel2 = 'Daniele';
variavel2 = 'Daniele Januario';
console.log(variavel2);

const variavel3 = 'Daniele';
// variavel3 = 'Daniele Januario'; // Isso causaria um erro, pois const não pode ser reatribuído
const variavel4 = 'Januario';
console.log(variavel3);

var escopoGlobal = 'global';
console.log (escopoGlobal)();

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);

}
escopoLocal();

//atribuição
var atribuição = 'Daniele';

//var comparação
var comparação = '0' == 0;
console.log(comparação);

//comparação idêntica
var comparaçãoIdêntica = '0' === 0;
console.log(comparaçãoIdêntica);

//adição
var adicao = 1 + 1;
console.log(adicao);

//subtração
var subtração = 2 - 1;
console.log(subtração);

//multiplicação
var multiplicação = 2 * 3;
console.log(multiplicação);

//divisão real
var divisãoReal = 6 / 2;
console.log(divisãoReal);

//divisão inteira
var divisãoInteira = 5 % 2;
console.log(divisãoInteira);

//potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

//operadores relacionais
//maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que
var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//menor ou igual a
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

//operadores lógicos

//e
var e = true && false;
console.log(e); //considera true apenas se os dois forem true

//ou
var ou = true || false;
console.log(ou); // considera true se um dos dois for true

//não
var nao = !true;
console.log(nao); // inverte o valor de true para false