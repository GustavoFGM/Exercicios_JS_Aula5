/*
//criando um alert apenas para mostrar uma msg na pagina 

alert("Seja bem vindo!!");
alert("esta é sua pagina inicial");

//criando um alert para conseguir uma informaçao com o usuario

let idade = prompt("qual sua idade?");
if(idade >= 18){
    console.log("sim, o usuario é maior de idade");
}else{
    console.log("não, o usuario é menor de idade")
}

//confirmando o status do usuario como um adm

let teste = confirm("Você é um admim?");
if(teste == true){
    document.write("usuario logado");
}else{
    document.write("usuario invalido");
}

// programa para mostrar se um dos numeros abaixo é maior que 105
let a = 20
let b = 60
let c = 106
let d = 110

if(a, b, c, d > 105){  // programa que nao deu totalmente certo
    console.log(a, b, c, d);
}


const numeros = [20, 60, 106, 110]; // estabelecendo os numeros anteriores como constantes 

for(let i = 0; i < 5; i++ ){ // formando um loop que diz, basicamente, enquanto i for menor uqe 5 voce vai passar pelos numeros 1 a 1 array
    if(numeros[i] > 105){// se o numero no array em que o [i] esta agora for maior...
        console.log("o numero " + numeros[i] + " é maior que 105");
    }
}

// mesma coisa porem agora mostrando o menor numero

const numeros1 = [20, 60, 106, 110]; // estabelecendo os numeros anteriores como constantes 

for(let i = 0; i < 5; i++ ){ // formando um loop que diz, basicamente, enquanto i for menor uqe 5 voce vai passar pelos numeros 1 a 1 array
    if(numeros1[i] < 105){// se o numero no array em que o [i] esta agora for maior...
        console.log("o numero " + numeros1[i] + " é maior que 105");
    }
}

// programa para checar a nota do aluno e depois checar se ele foi aprovadoou retido


let nota = prompt("Qual foi a sua nota?");

if(nota <=  5){
    console.log("O aluno esta retido");
}else{
    console.log("O aluno foi aprovado");
}
*/

// usando o operador &&

let a = prompt("digite um numero: ");
if(a > 1 && a < 5){  //&& serve para comparar o mesmo numero, por exemplo checando se o umero em questao esta entre outros dois numeros 
    console.log("sim " + a + " esta entre os numeros 1 e 5 ");
}else{
    console.log("o numero nao" + a +" esta entre 1 e 5");
}
//
let b = prompt("digite um numero: ");
if(b < 10 && b > 20){
    console.log("o numero " + b + " é menorque 10 ou maior que 20");
}else{
    console.log("o numero" + b + " digitado esta entre 10 e 20");
}
//
let c = prompt("digite um numero: ")
if(c > 100 && c < 110){
    console.log("O numero " + c + " esta entre os numeros 100 e 110");
}else{
    console.log("o numero " + c + " em questao nao esta entre 100 e 110");
}

// utilizando o operador || (ou)

let a1 = prompt("digite um numero: ");
if(a1 > 20 || a1 < 25){
    console.log("o numero " + a1 + "é ou maior que 20 ou menor que 25 ");
}else{
    console.log("o numero " + a1 + " não é ou maior que 20 ou menor que 25 ")
}
//
let b1 = prompt("digite um numero: ");
if(b1 < 10 || b1 > 15){
    console.log("o numero " + b1 + "é ou maior que 15 ou menor que 10 ");
}else{
    console.log("o numero " + b1 + "não é ou maior que 15 ou menor que 10 ");
}
//
let c1 = prompt("digite um numero: ");
if(c1 > 5 || c1 < 10){
    console.log("o numero " + c1 + "é ou maior que 5 ou menor que 10 ");
}else{
    console.log("o numero " + c1 + "não é ou maior que 5 ou menor que 10 ");
}
//