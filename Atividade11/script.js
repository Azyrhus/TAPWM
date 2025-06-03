// ---------- Exercício 1 - Função Construtora para Retângulo ----------
function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

function calcularArea() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const ret = new Retangulo(base, altura);
    document.getElementById('resultadoArea').innerText = 
        `Área do Retângulo: ${ret.calcularArea()} unidades²`;
}

// ---------- Exercício 2 - Classes com Herança ----------
class Conta {
    constructor(nome, banco, numeroConta, saldo) {
        this.nome = nome;
        this.banco = banco;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    getDados() {
        return `Nome: ${this.nome}, Banco: ${this.banco}, Conta: ${this.numeroConta}, Saldo: R$ ${this.saldo}`;
    }
}

class Corrente extends Conta {
    constructor(nome, banco, numeroConta, saldo, saldoEspecial) {
        super(nome, banco, numeroConta, saldo);
        this.saldoEspecial = saldoEspecial;
    }

    getDados() {
        return `${super.getDados()}, Saldo Especial: R$ ${this.saldoEspecial}`;
    }
}

class Poupanca extends Conta {
    constructor(nome, banco, numeroConta, saldo, juros, vencimento) {
        super(nome, banco, numeroConta, saldo);
        this.juros = juros;
        this.vencimento = vencimento;
    }

    getDados() {
        return `${super.getDados()}, Juros: ${this.juros}%, Vencimento: ${this.vencimento}`;
    }
}

function criarCorrente() {
    const nome = document.getElementById('nomeCorrente').value;
    const banco = document.getElementById('bancoCorrente').value;
    const numero = document.getElementById('numeroCorrente').value;
    const saldo = parseFloat(document.getElementById('saldoCorrente').value);
    const saldoEspecial = parseFloat(document.getElementById('saldoEspecial').value);

    const contaCorrente = new Corrente(nome, banco, numero, saldo, saldoEspecial);
    document.getElementById('resultadoCorrente').innerText = contaCorrente.getDados();
}

function criarPoupanca() {
    const nome = document.getElementById('nomePoupanca').value;
    const banco = document.getElementById('bancoPoupanca').value;
    const numero = document.getElementById('numeroPoupanca').value;
    const saldo = parseFloat(document.getElementById('saldoPoupanca').value);
    const juros = parseFloat(document.getElementById('juros').value);
    const vencimento = document.getElementById('vencimento').value;

    const contaPoupanca = new Poupanca(nome, banco, numero, saldo, juros, vencimento);
    document.getElementById('resultadoPoupanca').innerText = contaPoupanca.getDados();
}
