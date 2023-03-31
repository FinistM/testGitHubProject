export class Vid {
    private _id: bigint;
    private _name: string;

    constructor(id: bigint, name: string){
        this._id = id;
        this._name = name;
    }

    get id(): bigint {
      return this._id;
    }

    set id(value: bigint){
      this._id = value;
    }

    get name(): string {
      return this._name;
    }

    set name(value: string){
      this._name = value;
    }
}
