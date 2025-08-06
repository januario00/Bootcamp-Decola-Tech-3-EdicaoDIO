// o que sao vetores ou arrays?
// Vetores ou arrays sao estruturas de dados que permitem armazenar varios valores em uma unica variavel.

// como declarar um array?
let array1 = []; // array vazio
let array2 = [1, 2, 3]; // array com numeros
let array3 = ['string', 1, true]; 

//pode guardar qualquer tipo de dado
let array = ['string', 1, true, ['array1'],['array2'],['array3'],['array4']];
console.log(array[0]); // string
console.log(array[1]); // 1

//forEach
array.forEach(function(item, index){console.log(item,index)});

array.push([]); // adiciona um item no final do array
console.log(array);

array.pop(); // remove o ultimo item do array
console.log(array);

array.unshift('novo item'); // adiciona um item no inicio do array
console.log(array);

console.log(array.indexOf('string')); // retorna o indice do item no array

array.splice(0, 3); // remove 3 itens a partir do indice 0
console.log(array);
// slice - retorna uma copia de uma parte do array

array.slice(0, 3); // retorna uma copia do array do indice 0 ao 3
console.log(array);

let object = { string: 'string', number: 1, boolean: true, array: ['array1'], objectInterno: { objectInterno: 'objeto interno' } };
console.log(object.objectInterno); // acessa a propriedade string do objeto

var string = object.string; // acessa a propriedade string do objeto
console.log(string); // string

var arrayInterno = object.array; // acessa a propriedade array do objeto
console.log(arrayInterno); // ['array1']

var { string, boolean,objectInterno} = object; // desestrutura o objeto
console.log(string, boolean, objectInterno); // string true { objectInterno: 'objeto interno' }