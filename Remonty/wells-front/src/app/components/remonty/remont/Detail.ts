export class Detail {
    private _name: string;
    private _col: string;
    private _detalization: string;


    constructor(name: string, col: string, detalization: string){
        this._name = name;
        this._col = col;
        this._detalization = detalization;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string){
        this._name = value;
    }

    get col(): string {
        return this._col;
    }

    set col(value: string){
        this._col = value;
    }

    get detalization(): string {
        return this._detalization;
    }

    set detalization(value: string){
        this._detalization = value;
    }
}
