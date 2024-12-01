class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldoInicial: number) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }

    sacar(valor: number): void {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        }
    }
}