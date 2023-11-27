class InstrumentoMusical {

    nome;
    marca;
    ano;
    preco;

    constructor(nome,marca,ano, preco) {
        this.nome = nome;
        this.marca = marca;
        this.ano = ano;
        this.preco = preco;
    }
}

class Violino extends InstrumentoMusical {
    cordas;

    constructor(nome, marca, ano, preco, cordas) {
        super(nome, marca, ano, preco);
        this.cordas = cordas;
    }
}

class Piano extends InstrumentoMusical {
    teclas;

    constructor(nome, marca, ano, preco, teclas) {
        super(nome, marca, ano, preco);
        this.teclas = teclas;
    }
}

// Criando instâncias
const violino = new Violino('Xuxao', 'Ching Ling', 2020, 150, 4);
const piano = new Piano('Piano de Cauda', 'Yamaha', 2018, 5000, 88);
const violino1 = new Violino('Ve 441', 'Eagle', 2019, 800, 4);

console.log(violino);
console.log(piano);
console.log(violino1);
