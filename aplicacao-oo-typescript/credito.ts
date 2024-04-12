export class Credito {

    private _valor: number;
    private _data: number;


    public get valor(): number {
        return this._valor;
    }

    public set valor(valor: number) {
        this._valor = valor;
    }

    public get data(): number {
        return this._data;
    }

    public set data(data: number) {
        this._data = data;
    }
}