var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        this.saldo += valor;
        console.log("Dep\u00F3sito de R$".concat(valor, " realizado. Novo saldo: R$").concat(this.saldo));
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
        }
        else {
            this.saldo -= valor;
            console.log("Saque de R$".concat(valor, " realizado. Novo saldo: R$").concat(this.saldo));
        }
    };
    return ContaBancaria;
}());
