let olamundo = "ola mundo";
alert("hello");
console.log(olamundo);

// regra de sinas: '=', '==', '===', '&&' e '||'

let a = 10;
const b = "10";

// = "incrementa 'b' a 'a'"
console.log(a = b);
// == "compara se o valor de 'b' e igual ao de 'a' sem se importar com tipo de variavel (numerica,char,etc) "
console.log(a == b);
// === "compara o valor e a igualdade da variavel 'a' e 'b'"
console.log(a === b);
/* && "cria uma relacao entre as duas operacoes, no caso do '&&'
 todas a operacoes precisam ser verdadeiras para que o resultado da relacao seja verdadeiro"*/
console.log(a === b && a == b);
/* || "cria uma relacao entre as duas operacoes, no caso do '||'
basta que uma operacao seja verdadeira para que toda relacao seja verdadeira*/
console.log(a === b || a == b);

// if e else
// o que esta dentro do 'if' e executado se caso a afirmacao entre parentese for verdadeira
let cor = "verde";
if (cor === "verde"){

console.log("siga");
}
/*caso if nao seja verdadeiro o programa a ingnora e executa o que esta dentro de 'else if' 
que e uma segunda condicao indepente da primeira*/
else if (cor == "amarelo"){
    console.log("atencao");
}
else if (cor == "vermelho"){
    console.log("pare");
}
/*caso if, ou nenhuma outra condicao else if  fot verdadeira
 o programa a ingnora e executa o que esta dentro de 'else'*/
else {
    console.log("cor nao encontrada no semaforo");
}