//alert("Seja Bem vindo");

//document.write("Fem-Findo to JavaScrip");

/*prompt(
    "digite seu nome"
);*/

//resp=confirm("Fale pro repete que eu sobrevivi!")

/*alert("Um retorno de carro \ bem no meio dessa linha");
alert("\"Isto não saiu com deveria!\"disse ela");
alert("esta linha tem tabulação\ taqui");*/

/*var a,b;
a=5;
b="5 kg de açucar";
document.write("O valor da variável A é:" +a);
document.write("<p>" + "O valor da variável B é:" +b+ "</p>");
document.write("<p>" + "O valor da variável A dividido por 2 é: " +a/2+ "</p>");
document.write("<p>" + "O valor da variável B dividido por 2 é: " +b/2+ "</p>");*/

/*var a, inteiro, flutuante;
a= "45.78Kg de açucar";
inteiro=parseInt(a);
flutuante=parseFloat(a);
document.write("O valor da variável A é: " +a);
document.write("<p>" + "O valor do número inteiro da variável é: " +inteiro+ "</p>");
document.write("<p>" + "O valor da variavel A dividido por 2 é: " +inteiro/2+ "</p>");
document.write("<p>" + "O valor decimal da variável é: " +flutuante+ "</p>");*/

/*var a, b, c;
a="Olá pessoal ";
b="Fem-Findos ao JavaScript";
c=a+b
alert(c);*/

/*var a,b,c;
a=50;
b=25;
c=100;
d=parseInt(a-50);
document.write("<p>"+"50/2 é: "+ a/2 + "</p>");
document.write("<p>"+"50-50 é: "+ d + "</p>");
document.write("<p>"+"50%2 é: "+ a%2 + "</p>");
document.write("<p>"+"25x2 é: "+ b*2 + "</p>");
document.write("<p>"+"100x5 é: "+ c*5 + "</p>");*/

//declaração das variáveis
/*hoje = new Date();
xDia = hoje.getDay();
diaSemana= new Array(7);
pratododia= new Array(7);
valordoprato= new Array(7);


//dia da semana
diaSemana[0]="Domingo";
diaSemana[1]="Segunda-feira";
diaSemana[2]="Terça-feira";
diaSemana[3]="Quarta-feira";
diaSemana[4]="Quinta-feira";
diaSemana[5]="Sexta-feira";
diaSemana[6]="Sábado";

//prato do dia
pratododia[0]="Lasanha";
pratododia[1]="Filé de frango";
pratododia[2]="Frango à parmediana";
pratododia[3]="Cuzcuz";
pratododia[4]="Contra-filé";
pratododia[5]="Frango à mineira";
pratododia[6]="Feijoada";

//preço do prato
valordoprato[0]="R$20,90";
valordoprato[1]="R$16,90";
valordoprato[2]="R$20,90";
valordoprato[3]="R$17,93";
valordoprato[4]="R$19,90";
valordoprato[5]="R$21,90";
valordoprato[6]="R$34,90";

document.write("O número da semana é:" +" "+(xDia+1));
document.write("<p><b>"+"Hoje é: "+diaSemana[xDia]+"</p></b>");
document.write("<p><b>"+"Nossa sugestão é: "+pratododia[xDia]+"</p></b>");
document.write("<p><b>"+"O valor do prato é: "+valordoprato[xDia]+"</p></b>");
for ( i=1; i <= 5; i++){
    document.write("Esta é a linha ",i,"<br>");
}*/

valor = new Array(3,2,4,1,5);
i=0
total=0
while(total < 10){
    total +=valor[i];i++;
}
document.write("Total = " +total);

