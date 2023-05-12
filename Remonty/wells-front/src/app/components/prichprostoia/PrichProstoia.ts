export class PrichProstoia {
    private _id: bigint;
    private _prichina: string;
    private _groups: string;


    constructor(id: bigint, prichina: string, groups: string){
        this._id = id;
        this._prichina = prichina;
        this._groups = groups;
    }

    get id(): bigint {
        return this._id;
    }

    set id(value: bigint){
        this._id = value;
    }

    get prichina(): string {
        return this._prichina;
    }

    set prichina(value: string){
        this._prichina = value;
    }

    get groups(): string {
        return this._groups;
    }

    set groups(value: string){
        this._groups = value;
    }
}
