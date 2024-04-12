export abstract class Conta {
   
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    public depositar(valor: number): void {
        this.saldo += valor;
    }

    public sacar(valor: number): boolean {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true; 
        } else {
            return false; 
        }
    }
}
