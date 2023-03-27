import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Remont } from 'src/app/components/remont/Remont';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  remont!:Remont[];
  constructor(private http:HttpClient) { }

  Url='http://localhost:8081/remonty';
  //Url='http://192.168.7.111:8081/remonty';

  getRemont(){
    return this.http.get<Remont>(this.Url);
  }

  createRemont(skvajina: String, kyst: String, mestorojdenie: String, vid_remonta: String, prichina: String, start_date_year: String, start_date_month: String, start_date_day: String, start_time_hour: String, start_time_minute: String, end_date_year: String, end_date_month: String, end_date_day: String, end_time_hour: String, end_time_minute: String, brigada: String, primechanie: String){
    return this.http.post<Remont>(this.Url, {skvajina, kyst, mestorojdenie, vid_remonta, prichina, start_date_year, start_date_month, start_date_day, start_time_hour, start_time_minute, end_date_year, end_date_month, end_date_day, end_time_hour, end_time_minute, brigada, primechanie});
  }

  /*createRemont(remont:Remont){
    //alert("Информация добавлена" + Remont);
    return this.http.post(this.Url, remont);
  }*/

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
}
