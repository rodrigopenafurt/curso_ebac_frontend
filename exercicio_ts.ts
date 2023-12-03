function multiplicar(valor1: number, valor2: number): number {
    return valor1 * valor2;
}

let executaMultiplicar = multiplicar(3, 4)
console.log(executaMultiplicar)

function saudacao (nome: string): string {
    return `Olá ` + nome;
}

let executaNome = saudacao('Rodrigo')
console.log(executaNome)