export class VidPrichProstoia {
     private _id: bigint;
     private _groups: string;

     constructor(id: bigint, groups: string){
         this._id = id;
         this._groups = groups;
     }

     get id(): bigint {
       return this._id;
     }

     set id(value: bigint){
       this._id = value;
     }

     get groups(): string {
       return this._groups;
     }

     set groups(value: string){
       this._groups = value;
     }
}
