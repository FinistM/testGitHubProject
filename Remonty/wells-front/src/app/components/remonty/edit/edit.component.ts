import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Remont } from 'src/app/components/remonty/remont/Remont';
import { ServiceService } from 'src/app/Service/service.service';
import { Vid } from 'src/app/components/vidRemonta/vid/Vid';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit{

    remont!: Remont;
    vidy!: Vid[];
    vid_rem!: Object;
    k!: boolean;

    start_date_day!: string;
    start_date_month!: string;
    start_date_year!: string;

    start_time_hour!: string;
    start_time_minute!: string;

    end_date_day!: string;
    end_date_month!: string;
    end_date_year!: string;

    end_time_hour!: string;
    end_time_minute!: string;

    constructor(private httpClient: HttpClient, private router:Router, private service:ServiceService) {
        httpClient.get<Vid[]>(environment.UrlVid)
        //httpClient.get<Vid[]>("http://192.168.7.111:8081/vidy")
        .subscribe(result=>{
            this.vidy = result;
        })
    }

    ngOnInit(){
        this.Editor();
    }

    Editor(){
        let id=localStorage.getItem("id");
        console.log("From Editor in EditComp "+id);

        this.service.getRemontId(parseInt(id!,10))
        .subscribe(data =>{
            this.remont=data;

            this.start_date_day =  this.remont.date_start.substring(8, 10)
            this.start_date_month =  this.remont.date_start.substring(5, 7)
            this.start_date_year =  this.remont.date_start.substring(0, 4)
            this.start_time_hour =  this.remont.time_start.substring(0, 2)
            this.start_time_minute =  this.remont.time_start.substring(3, 5)

            if (this.remont.date_start+this.remont.time_start==this.remont.date_end+this.remont.time_end) {
                this.end_date_day=this.end_date_month=this.end_date_year=this.end_time_hour=this.end_time_minute="";
            }
            else {
              this.end_date_day =  this.remont.date_end.substring(8, 10)
              this.end_date_month =  this.remont.date_end.substring(5, 7)
              this.end_date_year =  this.remont.date_end.substring(0, 4)
              this.end_time_hour =  this.remont.time_end.substring(0, 2)
              this.end_time_minute =  this.remont.time_end.substring(3, 5)
            }
            this.vid_rem=Object.values(this.remont.vid_remonta)[1];
        })
    }

    Actualisation(remont:Remont, b:String, start_date_day: string, start_date_month: string, start_date_year: string,
    start_time_hour: string, start_time_minute: string,
    end_date_day: string, end_date_month: string, end_date_year: string,
    end_time_hour: string, end_time_minute: string){

        if (end_date_year=="" && end_date_month=="" && end_date_day=="" && end_time_hour=="" && end_time_minute=="")
        {
          end_date_year=start_date_year;
          end_date_month=start_date_month;
          end_date_day=start_date_day;
          end_time_hour=start_time_hour;
          end_time_minute=start_time_minute;
        }

        this.remont.date_start = start_date_year + "-" + start_date_month.padStart(2, '0') + "-" + start_date_day.padStart(2, '0');
        this.remont.time_start = start_time_hour.padStart(2, '0') + ":" + start_time_minute.padStart(2, '0') + ":00";
        this.remont.date_end = end_date_year.padStart(2, '0') + "-" + end_date_month.padStart(2, '0') + "-" + end_date_day;
        this.remont.time_end = end_time_hour.padStart(2, '0') + ":" + end_time_minute.padStart(2, '0') + ":00";

        this.k = this.Check(String(this.remont.skvajina), String(this.remont.kyst), String(this.remont.mestorojdenie),
        String(this.remont.vid_remonta), String(this.remont.prichina), start_date_year, start_date_month, start_date_day,
        start_time_hour, start_time_minute, end_date_year, end_date_month, end_date_day, end_time_hour, end_time_minute,
        String(this.remont.brigada), String(this.remont.primechanie));

        for(let vid of this.vidy){
            if(b==vid.name){
                console.log("b:" + b + " - vid.name:" + vid.name);
                this.remont.vid_remonta=vid;
            }
        }

        if (this.k == true){
            this.service.updateRemont(remont)
            .subscribe(data =>{
                this.remont=data;
                alert("Изменения сохранены");
                this.router.navigate(["remontList"]);
            })
        }
    }

    Check(skvajina: string, kyst: string, mestorojdenie: string, vid_remonta: string, prichina: string,
        start_date_year: string, start_date_month: string, start_date_day: string, start_time_hour: string,
        start_time_minute: string, end_date_year: string, end_date_month: string, end_date_day: string,
        end_time_hour: string, end_time_minute: string, brigada: string, primechanie: string){
        let x:boolean = false;
        const today = new Date();
        let dayStartCheck = new Date();
        let dayEndCheck = new Date();
        let fullDateEndCheck=0;
        let mas: string[] = [end_date_year, end_date_month, end_date_day, end_time_hour, end_time_minute];
        let startDateCheck = start_date_year + start_date_month.padStart(2, '0') + start_date_day.padStart(2, '0') +
        start_time_hour.padStart(2, '0') + start_time_minute.padStart(2, '0');
        let endDateCheck = end_date_year + end_date_month.padStart(2, '0') + end_date_day.padStart(2, '0') +
        end_time_hour.padStart(2, '0') + end_time_minute.padStart(2, '0');
        let nowDate = today.getFullYear() + String(today.getMonth()+1).padStart(2, '0') +
        String(today.getDate()).padStart(2, '0') + String(today.getHours()).padStart(2, '0') +
        String(today.getMinutes()).padStart(2, '0');

        dayStartCheck.setFullYear(Number(start_date_year));
        dayStartCheck.setMonth(Number(start_date_month)-1);
        dayStartCheck.setDate(Number(start_date_day));

        dayEndCheck.setFullYear(Number(end_date_year));
        dayEndCheck.setMonth(Number(end_date_month)-1);
        dayEndCheck.setDate(Number(end_date_day));

        for (let i=0; i<5; i++) if (mas[i]=="") fullDateEndCheck++;

        if (skvajina == "" || kyst == "" || mestorojdenie == "" || vid_remonta == "" || prichina == "" ||
        start_date_year == "" || start_date_month == "" || start_date_day == "" || start_time_hour == "" ||
        start_time_minute == "" || brigada == "") { alert("Проверьте заполнение полей!"); x = false }
        else if (fullDateEndCheck>0 && fullDateEndCheck<5) { console.log(fullDateEndCheck);
        alert("Дата окончания может быть либо полностью заполнена, либо полностью пуста!"); x = false }
        else if (Number(start_date_year) > today.getFullYear() || Number(start_date_year) < 1900 ||
        Number(start_date_month) > 12 || Number(start_date_month) < 1 ||
        Number(start_date_day) > 31 || Number(start_date_day) < 1 ||
        Number(start_time_hour) > 23 || Number(start_time_hour) < 0 ||
        Number(start_time_minute) > 59 || Number(start_time_minute) < 0 ||
        Number(startDateCheck)>Number(nowDate) || Number(start_date_day)!=Number(dayStartCheck.getDate())) {
        alert("Проверьте корректность заполнения даты и времени начала!"); x = false }
        else if (Number(end_date_year) > today.getFullYear() || Number(end_date_year) < 1900 ||
        Number(end_date_month) > 12 || Number(end_date_month) < 1 ||
        Number(end_date_day) > 31 || Number(end_date_day) < 1 ||
        Number(end_time_hour) > 23 || Number(end_time_hour) < 0 ||
        Number(end_time_minute) > 59 || Number(end_time_minute) < 0 ||
        Number(startDateCheck)>Number(nowDate) || Number(end_date_day)!=Number(dayEndCheck.getDate())) {
        alert("Проверьте корректность заполнения даты и времени окончания!"); x = false }
        else if (start_date_year + start_date_month.padStart(2, '0') + start_date_day.padStart(2, '0') +
        start_time_hour.padStart(2, '0') + start_time_minute.padStart(2, '0') >
        end_date_year + end_date_month.padStart(2, '0') + end_date_day.padStart(2, '0') +
        end_time_hour.padStart(2, '0') + end_time_minute.padStart(2, '0')) {
        alert("Дата окончания должна идти после даты начала!"); x = false }
        else x = true;

        return x;
    }
}
