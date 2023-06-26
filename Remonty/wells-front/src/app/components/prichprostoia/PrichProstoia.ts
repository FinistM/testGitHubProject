export class PrichProstoia {
    private _id: bigint;
    private _prichina: string;
    private _arhivprichin: boolean;
    private _podgrouppa: Object;
    private _grouppa: Object;



    constructor(id: bigint, prichina: string, arhivprichin: boolean, podgrouppa: string, grouppa: string){
        this._id = id;
        this._prichina = prichina;
        this._arhivprichin = arhivprichin;
        this._podgrouppa = podgrouppa;
        this._grouppa = grouppa;
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

    get arhivprichin(): boolean {
        return this._arhivprichin;
    }

    set arhivprichin(value: boolean){
        this._arhivprichin = value;
    }

    get podgrouppa(): Object {
        return this._podgrouppa;
    }

    set podgrouppa(value: Object){
        this._podgrouppa = value;
    }

    get grouppa(): Object {
        return this._grouppa;
    }

    set grouppa(value: Object){
        this._grouppa = value;
    }


}
