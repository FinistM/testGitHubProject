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
    vid_rem!: Object;
    date_start!: string;
    time_start!: string;
    date_end!: string;
    time_end!: string;
    k!: boolean;

    constructor(private httpClient: HttpClient, private router:Router, private service:ServiceService) {
        httpClient.get<Vid[]>("http://localhost:8081/vidy")
        //httpClient.get<Vid[]>("http://192.168.7.111:8081/vidy")
        .subscribe(result=>{
            this.vidy = result;
        })
    }

    ngOnInit(){
    }

    Add(skvajina:string, kyst:string, mestorojdenie:string, vid_remonta:string, prichina:string, start_date_year:string,
    start_date_month:string, start_date_day:string, start_time_hour:string, start_time_minute:string, end_date_year:string,
    end_date_month:string, end_date_day:string, end_time_hour:string, end_time_minute:string, brigada:string,
    primechanie:string){

        for(let vid of this.vidy){
            if(Object.values(vid_remonta)[1]==Object.values(vid.name)[1]){
                  this.vid_rem=vid;
            }
        }

        if (end_date_year=="" && end_date_month=="" && end_date_day=="" && end_time_hour=="" && end_time_minute=="")
        {
            end_date_year=start_date_year;
            end_date_month=start_date_month;
            end_date_day=start_date_day;
            end_time_hour=start_time_hour;
            end_time_minute=start_time_minute;
        }

        this.date_start = start_date_year + "-" + start_date_month.padStart(2, '0') + "-" + start_date_day.padStart(2, '0');
        this.time_start = start_time_hour.padStart(2, '0') + ":" + start_time_minute.padStart(2, '0') + ":00";
        this.date_end = end_date_year + "-" + end_date_month.padStart(2, '0') + "-" + end_date_day.padStart(2, '0');
        this.time_end = end_time_hour.padStart(2, '0') + ":" + end_time_minute.padStart(2, '0') + ":00";

        this.k = this.Check(skvajina, kyst, mestorojdenie, vid_remonta, prichina, start_date_year, start_date_month, start_date_day, start_time_hour, start_time_minute, end_date_year, end_date_month, end_date_day, end_time_hour, end_time_minute, brigada, primechanie);

        if (this.k == true) {
            this.service.createRemont(skvajina, kyst, mestorojdenie, this.vid_rem, prichina, this.date_start, this.time_start, this.date_end, this.time_end, brigada, primechanie)
            .subscribe(data => {
                alert("Информация добавлена");
                this.router.navigate(["remontList"]);
            })
        }
    }

    Adapt(b: Object){
        return b=Object.values(b);
    }

    Check(skvajina: string, kyst: string, mestorojdenie: string, vid_remonta: string, prichina: string,
        start_date_year: string, start_date_month: string, start_date_day: string, start_time_hour: string,
        start_time_minute: string, end_date_year: string, end_date_month: string, end_date_day: string,
        end_time_hour: string, end_time_minute: string, brigada: string, primechanie: string){
        let x:boolean = false;
        const today = new Date();

        let fullDateEndCheck=0;
        let mas: string[] = [end_date_year, end_date_month, end_date_day, end_time_hour, end_time_minute];
        let startDateCheck = start_date_year + start_date_month.padStart(2, '0') + start_date_day.padStart(2, '0') +
        start_time_hour.padStart(2, '0') + start_time_minute.padStart(2, '0');
        let endDateCheck = end_date_year + end_date_month.padStart(2, '0') + end_date_day.padStart(2, '0') +
        end_time_hour.padStart(2, '0') + end_time_minute.padStart(2, '0');
        let nowDate = today.getFullYear() + String(today.getMonth()+1).padStart(2, '0') +
        String(today.getDate()).padStart(2, '0') + String(today.getHours()).padStart(2, '0') +
        String(today.getMinutes()).padStart(2, '0');

        let dayStartCheck = new Date();
        dayStartCheck.setFullYear(Number(start_date_year));
        dayStartCheck.setMonth(Number(start_date_month)-1);
        dayStartCheck.setDate(Number(start_date_day));

        let dayEndCheck = new Date();
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
