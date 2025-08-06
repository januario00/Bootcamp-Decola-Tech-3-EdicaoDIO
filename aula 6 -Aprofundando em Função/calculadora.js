function calculadora() {
    const operacao = Number(prompt(
        'Escolha a operação:\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(x)\n 4 - Divisão real(/)\n 5 - Divisão inteira(%)\n 6 - Potenciação(**)'
    ));

    if (!operacao || operacao < 1 || operacao > 6) {
        alert('Erro - operação inválida!');
        return calculadora();
    }

    let n1 = Number(prompt("Insira o primeiro valor:"));
    let n2 = Number(prompt("Insira o segundo valor:"));

    if (!n1 || !n2) {
        alert('Erro - parâmetros inválidos!');
        return calculadora();
    }

    let resultado;

    function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
    }

    function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
    }

    function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
    }

    function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
    }

    function divisaoInteira() {
        resultado = Math.floor(n1 / n2);
        alert(`A divisão inteira de ${n1} / ${n2} é igual a ${resultado}`);
        novaOperacao();
    }

    function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
        novaOperacao();
    }

    function novaOperacao() {
        let opcao = prompt('Deseja fazer outra operação?\n1 - Sim\n2 - Não');

        if (opcao == 1) {
            calculadora();
        } else if (opcao == 2) {
            alert('Obrigado por utilizar nossa calculadora!');
        } else {
            alert('Opção inválida! Tente novamente.');
            novaOperacao();
        }
    }

    // Execução com base na operação escolhida:
    switch (operacao) {
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            potenciacao();
            break;
    }
}

calculadora();
