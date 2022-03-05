//atividade 05/03 - Se nota final for 4 ou menor é reprovado, entre 5 e 6 entra em rescuperação, maior ou igual a 7 é aprovado.
var n1 = 4;
var n2 = 4;
var n3 = 7;
var n4 = 5;
var media = 4;
var nota = ((n1 + n2 + n3 + n4) /media);
console.log(nota);
if (nota >= 7){
    console.log("Situação: Aprovado");
}else if (nota >= 5){
    console.log("Situação: Em Recuperação");
}else{
    console.log("Situação: Reprovado");
}