export class PodgrouppaPrichProstoia {
    private _id: bigint;
    private _podgrouppa: string;
    private _arhivpodgrouppa: boolean;
    private _grouppa: Object;



    constructor(id: bigint, podgrouppa: string, arhivpodgrouppa: boolean, grouppa: Object){
        this._id = id;
        this._podgrouppa = podgrouppa;
        this._grouppa = grouppa;
        this._arhivpodgrouppa = arhivpodgrouppa;
    }

    get id(): bigint {
        return this._id;
    }

    set id(value: bigint){
        this._id = value;
    }

    get podgrouppa(): string {
        return this._podgrouppa;
    }

    set podgrouppa(value: string){
        this._podgrouppa = value;
    }

    get arhivpodgrouppa(): boolean {
        return this._arhivpodgrouppa;
    }

    set arhivpodgrouppa(value: boolean){
        this._arhivpodgrouppa = value;
    }

    get grouppa(): Object {
        return this._grouppa;
    }

    set grouppa(value: Object){
        this._grouppa = value;
    }


}
