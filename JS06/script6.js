/*
Criar um código em JS para
Entrada, solicitar a digitação de um 
número inteiro
Analisar se o número é PAR ou ÍMPAR
Saída, mostrar o número digitado e 
o texto PAR ou ÍMPAR
Exemplo:
10 é PAR
17 é ÍMPAR
OBS: para esse código utilizar operador ternário
*/

let saida = document.getElementById("saida");
let num,res,calc;
num=parseInt(prompt("Digite um número inteiro"));
calc=num%2;//calc=0 ou calc=1
res=(calc==0)?"PAR":"IMPAR";
saida.innerHTML=`${num} é ${res}`;