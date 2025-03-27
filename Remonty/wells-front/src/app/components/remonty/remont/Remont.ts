export class Remont {
    private _id: bigint;
    private _skvajina: string;
    private _kyst: string;
    private _mestorojdenie: string;
    private _vid_remonta: Object;
    private _prichina: string;
    private _date_start: string;
    private _time_start: string;
    private _date_end: string;
    private _time_end: string;
    private _brigada: string;
    private _primechanie: string;


    constructor(id: bigint, skvajina: string, kyst: string, mestorojdenie: string, vid_remonta: Object, prichina: string,
    date_start: string, time_start: string, date_end: string, time_end: string, brigada: string, primechanie: string){
        this._id = id;
        this._skvajina = skvajina;
        this._kyst = kyst;
        this._mestorojdenie = mestorojdenie;
        this._vid_remonta = vid_remonta;
        this._prichina = prichina;
        this._date_start = date_start;
        this._time_start = time_start;
        this._date_end = date_end;
        this._time_end = time_end;
        this._brigada = brigada;
        this._primechanie = primechanie;
    }

    get id(): bigint {
        return this._id;
    }

    set id(value: bigint){
        this._id = value;
    }

    get skvajina(): string {
        return this._skvajina;
    }

    set skvajina(value: string){
        this._skvajina = value;
    }

    get kyst(): string {
        return this._kyst;
    }

    set kyst(value: string){
        this._kyst = value;
    }

    get mestorojdenie(): string {
        return this._mestorojdenie;
    }

    set mestorojdenie(value: string){
      this._mestorojdenie = value;
    }

    get vid_remonta(): Object {
        return this._vid_remonta;
    }

    set vid_remonta(value: Object){
        this._vid_remonta = value;
    }

    get prichina(): string {
        return this._prichina;
    }

    set prichina(value: string){
      this._prichina = value;
    }

    get date_start(): string {
        return this._date_start;
    }

    set date_start(value: string){
      this._date_start = value;
    }

    get time_start(): string {
        return this._time_start;
    }

    set time_start(value: string){
        this._time_start = value;
    }

    get date_end(): string {
        return this._date_end;
    }

    set date_end(value: string){
        this._date_end = value;
    }

    get time_end(): string {
      return this._time_end;
    }

    set time_end(value: string){
        this._time_end = value;
    }

    get brigada(): string {
        return this._brigada;
    }

    set brigada(value: string){
        this._brigada = value;
    }

    get primechanie(): string {
        return this._primechanie;
    }

    set primechanie(value: string){
        this._primechanie = value;
    }
}
