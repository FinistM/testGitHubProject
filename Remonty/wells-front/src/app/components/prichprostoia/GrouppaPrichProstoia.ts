export class GrouppaPrichProstoia {
    private _id: bigint;
    private _grouppa: string;
    private _arhivgrouppa: boolean;


    constructor(id: bigint, grouppa: string, arhivgrouppa: boolean){
        this._id = id;
        this._grouppa = grouppa;
        this._arhivgrouppa = arhivgrouppa;
    }

    get id(): bigint {
        return this._id;
    }

    set id(value: bigint){
        this._id = value;
    }

    get grouppa(): string {
        return this._grouppa;
    }

    set grouppa(value: string){
        this._grouppa = value;
    }

    get arhivgrouppa(): boolean {
        return this._arhivgrouppa;
    }

    set arhivgrouppa(value: boolean){
        this.arhivgrouppa = value;
    }
}
