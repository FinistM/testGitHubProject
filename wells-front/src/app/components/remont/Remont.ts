export class Remont {
    private _id: bigint;
    private _skvajina: string;
    private _kyst: string;
    private _mestorojdenie: string;
    private _vid_remonta: string;
    private _prichina: string;
    private _start_date_year: string;
    private _start_date_month: string;
    private _start_date_day: string;
    private _start_time_hour: string;
    private _start_time_minute: string;
    private _end_date_year: string;
    private _end_date_month: string;
    private _end_date_day: string;
    private _end_time_hour: string;
    private _end_time_minute: string;
    private _brigada: string;
    private _primechanie: string;

    constructor(id: bigint, skvajina: string, kyst: string, mestorojdenie: string, vid_remonta: string, prichina: string, start_date_year: string, start_date_month: string, start_date_day: string, start_time_hour: string, start_time_minute: string, end_date_year: string, end_date_month: string, end_date_day: string, end_time_hour: string, end_time_minute: string, brigada: string, primechanie: string){
        this._id = id;
        this._skvajina = skvajina;
        this._kyst = kyst;
        this._mestorojdenie = mestorojdenie;
        this._vid_remonta = vid_remonta;
        this._prichina = prichina;
        this._start_date_year = start_date_year;
        this._start_date_month = start_date_month;
        this._start_date_day = start_date_day;
        this._start_time_hour = start_time_hour;
        this._start_time_minute = start_time_minute;
        this._end_date_year = end_date_year;
        this._end_date_month = end_date_month;
        this._end_date_day = end_date_day;
        this._end_time_hour = end_time_hour;
        this._end_time_minute = end_time_minute;
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

    get vid_remonta(): string {
      return this._vid_remonta;
    }

    set vid_remonta(value: string){
      this._vid_remonta = value;
    }

    get prichina(): string {
      return this._prichina;
    }

    set prichina(value: string){
      this._prichina = value;
    }

    get start_date_year(): string {
      return this._start_date_year;
    }

    set start_date_year(value: string){
      this._start_date_year = value;
    }

    get start_date_month(): string {
      return this._start_date_month;
    }

    set start_date_month(value: string){
      this._start_date_month = value;
    }

    get start_date_day(): string {
      return this._start_date_day;
    }

    set start_date_day(value: string){
      this._start_date_day = value;
    }

    get start_time_hour(): string {
      return this._start_time_hour;
    }

    set start_time_hour(value: string){
      this._start_time_hour = value;
    }

    get start_time_minute(): string {
      return this._start_time_minute;
    }

    set start_time_minute(value: string){
      this._start_time_minute = value;
    }

    get end_date_year(): string {
      return this._end_date_year;
    }

    set end_date_year(value: string){
      this._end_date_year = value;
    }

    get end_date_month(): string {
      return this._end_date_month;
    }

    set end_date_month(value: string){
      this._end_date_month = value;
    }

    get end_date_day(): string {
      return this._end_date_day;
    }

    set end_date_day(value: string){
      this._end_date_day = value;
    }

    get end_time_hour(): string {
      return this._end_time_hour;
    }

    set end_time_hour(value: string){
      this._end_time_hour = value;
    }

    get end_time_minute(): string {
      return this._end_time_minute;
    }

    set end_time_minute(value: string){
      this._end_time_minute = value;
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
