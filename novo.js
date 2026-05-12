// ========================================
// EXERCÍCIO 2 — CALCULADORA DE MÉDIA
// ========================================

// Pergunta quantas notas o usuário quer digitar
let quantidadeNotas = Number(prompt("Quantas notas você quer digitar?"));

// Variável que guarda a soma das notas
let soma = 0;

// FOR para repetir a quantidade de notas
for (let i = 1; i <= quantidadeNotas; i++) {

    // Pede a nota
    let nota = Number(prompt(`Digite a nota ${i}:`));

    // WHILE para validar a nota
    while (nota < 0 || nota > 10 || isNaN(nota)) {

        alert("Nota inválida! Digite um valor entre 0 e 10.");

        nota = Number(prompt(`Digite novamente a nota ${i}:`));
    }

    // Soma as notas válidas
    soma += nota;
}

// Calcula a média
let media = soma / quantidadeNotas;

// Exibe o resultado
alert(`A média final é: ${media.toFixed(2)}`);





// ========================================
// EXERCÍCIO 3 — JOGO DA SENHA
// ========================================

// Senha correta
const senhaCorreta = "fiap2025";

// Variável da senha digitada
let senhaDigitada = "";

// Contador de tentativas
let tentativas = 0;

// Limite máximo
const limite = 5;

// WHILE repete até acertar ou acabar tentativas
while (senhaDigitada !== senhaCorreta && tentativas < limite) {

    senhaDigitada = prompt("Digite a senha:");

    tentativas++;

    // Verifica se acertou
    if (senhaDigitada === senhaCorreta) {

        alert(`Parabéns! Você acertou em ${tentativas} tentativa(s).`);
    }

    else {

        alert(`Senha incorreta! Tentativa ${tentativas} de ${limite}.`);
    }
}

// Se atingir o limite
if (senhaDigitada !== senhaCorreta) {

    alert("Acesso bloqueado!");
}





// ========================================
// EXERCÍCIO 4 — MENU INTERATIVO
// ========================================


// FUNÇÃO ÁREA DO QUADRADO
function areaQuadrado() {

    let lado = Number(prompt("Digite o lado do quadrado:"));

    let area = lado * lado;

    alert(`Área do quadrado: ${area}`);
}


// FUNÇÃO ÁREA DO CÍRCULO
function areaCirculo() {

    let raio = Number(prompt("Digite o raio do círculo:"));

    let area = Math.PI * (raio * raio);

    alert(`Área do círculo: ${area.toFixed(2)}`);
}


// FUNÇÃO ÁREA DO TRIÂNGULO
function areaTriangulo() {

    let base = Number(prompt("Digite a base do triângulo:"));

    let altura = Number(prompt("Digite a altura do triângulo:"));

    let area = (base * altura) / 2;

    alert(`Área do triângulo: ${area}`);
}



// Variável do menu
let opcao;


// DO WHILE mantém o menu funcionando
do {

    opcao = Number(prompt(
        "MENU\n\n" +
        "1 - Área do quadrado\n" +
        "2 - Área do círculo\n" +
        "3 - Área do triângulo\n" +
        "0 - Sair"
    ));


    // SWITCH para verificar a opção
    switch (opcao) {

        case 1:
            areaQuadrado();
            break;

        case 2:
            areaCirculo();
            break;

        case 3:
            areaTriangulo();
            break;

        case 0:
            alert("Programa encerrado!");
            break;

        default:
            alert("Opção inválida!");
    }

} while (opcao !== 0);