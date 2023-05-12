import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Remont } from 'src/app/components/remonty/remont/Remont';
import { PrichProstoia } from 'src/app/components/prichprostoia/PrichProstoia';
import { VidPrichProstoia } from 'src/app/components/vidPrichProstoia/vid-prichprostoia/VidPrichProstoia';
import { Detail } from 'src/app/components/details/detail/Detail';
import { Vid } from 'src/app/components/vidRemonta/vid/Vid';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ServiceService {

    vid!:Vid[];
    remont!:Remont[];
    detail!:Detail[];
    prichProstoia!:PrichProstoia[];
    constructor(private http:HttpClient) { }

    getRemont(){
        return this.http.get<Remont>(environment.UrlRemont);
    }

    createRemont(skvajina: String, kyst: String, mestorojdenie: String, vid_remonta: Object, prichina: String,
    date_start: String, time_start: String, date_end: String, time_end: String, brigada: String, primechanie: String){
        console.log("your vid_remonta:" + Object.values(vid_remonta)[1]);
        return this.http.post<Remont>(environment.UrlRemont, {skvajina, kyst, mestorojdenie, vid_remonta, prichina, date_start,
        time_start, date_end, time_end, brigada, primechanie});
    }

    getRemontId(id:number){
        return this.http.get<Remont>(environment.UrlRemont+"/"+id);
    }

    updateRemont(remont:Remont){
        return this.http.put<Remont>(environment.UrlRemont+"/"+remont.id,remont);
    }

    deleteRemont(remont:Remont){
        return this.http.delete<Remont>(environment.UrlRemont+"/"+remont.id);
        return this.http.get<Remont>(environment.UrlRemont);
    }

    getVid(){
        return this.http.get<Vid>(environment.UrlVid);
    }

    createVid(name: String){
        return this.http.post<Vid>(environment.UrlVid, {name});
    }

    getVidId(id:number){
        return this.http.get<Vid>(environment.UrlVid+"/"+id);
    }

    updateVid(vid:Vid){
        return this.http.put<Vid>(environment.UrlVid+"/"+vid.id,vid);
    }

    deleteVid(vid:Vid){
        return this.http.delete<Vid>(environment.UrlVid+"/"+vid.id);
        return this.http.get<Vid>(environment.UrlVid);
    }

    getDetail(){
        return this.http.get<Detail>(environment.UrlDetail);
    }

    getPrichProstoia(){
        return this.http.get<PrichProstoia>(environment.UrlPrichProstoia);
    }

    createPrichProstoia(prichina: String, groups: String){
        return this.http.post<PrichProstoia>(environment.UrlPrichProstoia, {prichina,groups});
    }

    getPrichProstoiaId(id:number){
        return this.http.get<PrichProstoia>(environment.UrlPrichProstoia+"/"+id);
    }

    updatePrichProstoia(prichina:PrichProstoia){
        return this.http.put<PrichProstoia>(environment.UrlPrichProstoia+"/"+prichina.id,prichina);
    }

    deletePrichProstoia(prichina:PrichProstoia){
        return this.http.delete<PrichProstoia>(environment.UrlPrichProstoia+"/"+prichina.id);
        return this.http.get<PrichProstoia>(environment.UrlPrichProstoia);
    }

    getVidPrichProstoia(){
        return this.http.get<VidPrichProstoia>(environment.UrlVidPrichProstoia);
    }
}
