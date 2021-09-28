let readlineSync = require('readline-sync');
var valor;
valor = readlineSync.question("Digite a Quantidade de Alunos na Sala: ");
for (var i = 0; i <= valor; i++) {
    if (i == 0) {
        console.log("O Número " + i + " é Zero!")
    } else if (i % 2 == 0) {
        console.log("O Número é Par " + i + " é Par!");
    } else {
        console.log("O Número é Impar " + i + " é Impar!")
    }
}