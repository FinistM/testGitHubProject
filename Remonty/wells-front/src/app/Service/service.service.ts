import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Remont } from 'src/app/components/remonty/remont/Remont';
import { Vid } from 'src/app/components/vidRemonta/vid/Vid';


@Injectable({
    providedIn: 'root'
})
export class ServiceService {

    vid!:Vid[];
    remont!:Remont[];
    constructor(private http:HttpClient) { }

    Url='http://localhost:8081/remonty';
    //Url='http://192.168.7.111:8081/remonty';
    Url1='http://localhost:8081/vidy';
    //Url1='http://192.168.7.111:8081/vidy';

    getRemont(){
        return this.http.get<Remont>(this.Url);
    }

    createRemont(skvajina: String, kyst: String, mestorojdenie: String, vid_remonta: Object, prichina: String,
    date_start: String, time_start: String, date_end: String, time_end: String, brigada: String, primechanie: String){
        console.log("your vid_remonta:" + Object.values(vid_remonta)[1]);
        return this.http.post<Remont>(this.Url, {skvajina, kyst, mestorojdenie, vid_remonta, prichina, date_start,
        time_start, date_end, time_end, brigada, primechanie});
    }

    getRemontId(id:number){
        return this.http.get<Remont>(this.Url+"/"+id);
    }

    updateRemont(remont:Remont){
        return this.http.put<Remont>(this.Url+"/"+remont.id,remont);
    }

    deleteRemont(remont:Remont){
        return this.http.delete<Remont>(this.Url+"/"+remont.id);
        return this.http.get<Remont>(this.Url);
    }

    getVid(){
        return this.http.get<Vid>(this.Url1);
    }

    createVid(name: String){
        return this.http.post<Vid>(this.Url1, {name});
    }

    getVidId(id:number){
        return this.http.get<Vid>(this.Url1+"/"+id);
    }

    updateVid(vid:Vid){
        return this.http.put<Vid>(this.Url1+"/"+vid.id,vid);
    }

    deleteVid(vid:Vid){
        return this.http.delete<Vid>(this.Url1+"/"+vid.id);
        return this.http.get<Vid>(this.Url1);
    }
}
