let a,b,c,d,e;
let saida = document.getElementById("saida");
a=50;
b=120;
c=200;
d=(a<=b) ? "OK" : "Só que não";//d="OK"
e=(a>=c) ? "Blz" : "Zoado";//e="Zoado"
saida.innerHTML=`d = ${d}<br>`;
saida.innerHTML+=`e = ${e}`;
