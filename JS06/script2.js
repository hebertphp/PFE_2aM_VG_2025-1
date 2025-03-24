let a,b,res;
let saida = document.getElementById("saida");
a=90;
b=10;
res=(a<b);
saida.innerHTML=`a = ${a} , b = ${b} <br>`;
//saida.innerHTML+="a = "+a+","+ b +" <br>";
saida.innerHTML+=`a < b : ${(a<b)} <br>`;//false
saida.innerHTML+=`!( a < b) : ${!(a<b)}<br>`;//trye
saida.innerHTML+="res : "+typeof(res);//