import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Remont } from 'src/app/components/remonty/remont/Remont';
import { Vid } from 'src/app/components/vidRemonta/vid/Vid';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit{


  vidy!: Vid[];

  constructor(private httpClient: HttpClient, private router:Router, private service:ServiceService) {
    httpClient.get<Vid[]>("http://localhost:8081/vidy")
    //httpClient.get<Vid[]>("http://192.168.7.111:8081/vidy")
    .subscribe(result=>{
      this.vidy = result;
    })
  }

  ngOnInit(){
  }

  Add(skvajina:String, kyst:String, mestorojdenie:String, vid_remonta:String, prichina:String, start_date_year:String, start_date_month:String, start_date_day:String, start_time_hour:String, start_time_minute:String, end_date_year:String, end_date_month:String, end_date_day:String, end_time_hour:String, end_time_minute:String, brigada:String, primechanie:String){
    //console.log("Data for added: " + " " + skvajina + " " + kyst + " " + mestorojdenie + " " + vid_remonta + " " + prichina + " " + start_date_year + " " + start_date_month + " " + start_date_day + " " + start_time_hour + " " + start_time_minute);
    this.service.createRemont(skvajina, kyst, mestorojdenie, vid_remonta, prichina, start_date_year, start_date_month, start_date_day, start_time_hour, start_time_minute, end_date_year, end_date_month, end_date_day, end_time_hour, end_time_minute, brigada, primechanie)
    .subscribe(data => {
       alert("Информация добавлена");
       this.router.navigate(["remontList"]);
    })
  }

  /*Add(remont:Remont){
//  alert("Информация взята: " + remont);
  this.service.createRemont(remont)
    .subscribe(data => {
       this.router.navigate(["remontyList"]);
    })
  }*/
}
