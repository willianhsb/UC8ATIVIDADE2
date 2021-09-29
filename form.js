let readlineSync = require('readline-sync');

var listaDePecas = [];
var pesoDePeca = [];
var capacidade = 3;

for (let index = 0; index < capacidade; index++) {
    listaDePecas[index] = readlineSync.question("Digite o Nome da Peca "+(index + 1)+":");
    pesoDePeca[index] = readlineSync.question("Digite o Peso da Peca:"+(index + 1)+":");
}
for (let index = 0; index < capacidade; index++) {
    console.log("A Peca "+listaDePecas[index]+" tem o peso de "+pesoDePeca[index]);
}