const num1 = parseFloat (prompt ("Digite um número"));//7.8
const num2 = parseFloat (prompt ("Digite um número"));//3
let result = num1 + num2;//10.8
let saida = document.getElementById("saida");
saida.innerHTML="Resultado da soma = "+result+"<br>";
saida.innerHTML+=typeof(num1);