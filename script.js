// ========================================
// MINI COLA JAVASCRIPT 🚀
// Feita para estudar no VS Code
// ========================================



// ========================================
// 1. VARIÁVEIS
// ========================================

// "let" = valor pode mudar
let nome = "João";

// "const" = valor fixo
const idade = 17;

// "var" = forma antiga (evite usar)
var cidade = "São Paulo";

console.log(nome);
console.log(idade);
console.log(cidade);



// ========================================
// 2. TIPOS DE DADOS
// ========================================

let texto = "Olá";        // String
let numero = 10;          // Number
let verdadeiro = true;    // Boolean
let vazio = null;         // Null
let indefinido;           // Undefined

console.log(typeof texto);
console.log(typeof numero);



// ========================================
// 3. OPERADORES ARITMÉTICOS
// ========================================

let a = 10;
let b = 5;

console.log(a + b); // Soma
console.log(a - b); // Subtração
console.log(a * b); // Multiplicação
console.log(a / b); // Divisão
console.log(a % b); // Resto da divisão
console.log(a ** b); // Potência



// ========================================
// 4. OPERADORES RELACIONAIS
// ========================================

console.log(a > b);   // Maior que
console.log(a < b);   // Menor que
console.log(a >= b);  // Maior ou igual
console.log(a <= b);  // Menor ou igual
console.log(a == b);  // Igual (valor)
console.log(a === b); // Igual (valor e tipo)
console.log(a != b);  // Diferente



// ========================================
// 5. OPERADORES LÓGICOS
// ========================================

// && = E
// || = OU
// !  = NÃO

let tenhoDinheiro = true;
let lojaAberta = false;

console.log(tenhoDinheiro && lojaAberta);
// Só será TRUE se os dois forem verdadeiros

console.log(tenhoDinheiro || lojaAberta);
// TRUE se pelo menos um for verdadeiro

console.log(!tenhoDinheiro);
// Inverte o valor



// ========================================
// 6. CONDICIONAIS
// ========================================

let nota = 8;

// IF = se
if (nota >= 7) {
    console.log("Aprovado");
}

// ELSE = senão
else {
    console.log("Reprovado");
}



// ========================================
// 7. ELSE IF
// ========================================

let hora = 15;

if (hora < 12) {
    console.log("Bom dia");
}

else if (hora < 18) {
    console.log("Boa tarde");
}

else {
    console.log("Boa noite");
}



// ========================================
// 8. SWITCH
// ========================================

let cor = "azul";

switch (cor) {

    case "vermelho":
        console.log("Cor vermelha");
        break;

    case "azul":
        console.log("Cor azul");
        break;

    default:
        console.log("Outra cor");
}



// ========================================
// 9. CAIXA DE TEXTO (PROMPT)
// ========================================

// prompt() pega dados digitados pelo usuário

let nomeUsuario = prompt("Digite seu nome:");

console.log("Olá " + nomeUsuario);



// ========================================
// 10. ALERTA
// ========================================

// Mostra uma mensagem na tela

alert("Bem-vindo!");



// ========================================
// 11. CONFIRM
// ========================================

// Retorna TRUE ou FALSE

let resposta = confirm("Você aceita?");

console.log(resposta);



// ========================================
// 12. LOOP FOR
// ========================================

// Repete várias vezes

for (let i = 0; i < 5; i++) {

    console.log("Número: " + i);

}

/*
FUNCIONAMENTO:

let i = 0   -> começa no 0
i < 5       -> repete até 4
i++         -> soma +1
*/



// ========================================
// 13. LOOP WHILE
// ========================================

let contador = 0;

while (contador < 5) {

    console.log(contador);

    contador++;
}



/*
while = enquanto

Enquanto a condição for TRUE,
o código continua repetindo.
*/



// ========================================
// 14. DO WHILE
// ========================================

let numeroLoop = 0;

do {

    console.log(numeroLoop);

    numeroLoop++;

} while (numeroLoop < 5);


/*
Executa pelo menos 1 vez,
mesmo que a condição seja falsa.
*/



// ========================================
// 15. ARRAY
// ========================================

// Lista de valores

let frutas = ["Maçã", "Banana", "Uva"];

console.log(frutas[0]); // Maçã
console.log(frutas[1]); // Banana



// ========================================
// 16. LOOP EM ARRAY
// ========================================

for (let i = 0; i < frutas.length; i++) {

    console.log(frutas[i]);

}



// ========================================
// 17. FUNÇÕES
// ========================================

// Função = bloco reutilizável

function somar(x, y) {

    return x + y;

}

console.log(somar(5, 3));



// ========================================
// 18. TEMPLATE STRING
// ========================================

let aluno = "Carlos";
let media = 9;

console.log(`O aluno ${aluno} tirou ${media}`);



// ========================================
// 19. CONVERSÃO DE TIPOS
// ========================================

let numeroTexto = "10";

// String -> Number
let convertido = Number(numeroTexto);

console.log(convertido + 5);



// ========================================
// 20. RESUMO RÁPIDO
// ========================================

/*

IF -> toma decisões
FOR -> repete quantidade definida
WHILE -> repete enquanto for verdadeiro
PROMPT -> entrada de dados
ALERT -> mensagem na tela

&& -> E
|| -> OU
!  -> NÃO

==  -> compara valor
=== -> compara valor e tipo

*/