let a,b;
let saida = document.getElementById("saida");
a=prompt("Digite o nome");//Bete
b=prompt("Digite o sobrenome");//Costa
saida.innerHTML=`${a} ${b}<br>`;//
saida.innerHTML+=a+" "+b+"<br>";
b+=" ";//"Costa "
b+=a;//"Costa Bete"
saida.innerHTML+=`<br>${b}`;//
saida.innerHTML+=`<br>O nome gerado foi: ${b}, funcinou?`;

//O nome gerado foi: Costa Bete,funcinou?