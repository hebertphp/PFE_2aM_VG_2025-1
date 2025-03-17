let a;
let saida = document.getElementById("saida");
a=parseInt(prompt("Digite um número"));//10
saida.innerHTML="a ="+ (a++);//10
saida.innerHTML+="<br>a final ="+ a;//11
a=10;//10
++a;//11
++a;//12
a++;//13
a++;//14
saida.innerHTML="a ="+ a;//14
--a;//13
--a;//12
a--;//11
saida.innerHTML+="<br>a ="+ a;//11