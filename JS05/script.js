let saida = document.getElementById("saida");
const num1 = parseFloat(prompt ("Digite o número1: "));//5
const num2 = parseFloat(prompt ("Digite o número2:"));//3
let soma;
soma=num1+num2;
saida.innerHTML="<br>Soma = "+soma;
saida.innerHTML+="<br>Subtração = "+(num1-num2);
saida.innerHTML+="<br>Multiplicação = "+num1*num2;
saida.innerHTML+="<br>Divisão = "+(num1/num2);
saida.innerHTML+="<br>Resto = "+(num1%num2);
saida.innerHTML+="<br>Expo = "+(num1**num2);