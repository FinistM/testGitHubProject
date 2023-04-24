import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Remont } from './Remont';
import { Detail } from 'src/app/components/details/detail/Detail';
import { Vid } from 'src/app/components/vidRemonta/vid/Vid';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-remont',
    templateUrl: './remont.component.html',
    styleUrls: ['./remont.component.css']
})

export class RemontComponent {
    title = 'remont-angular-project';
    remonty!: Remont[]; vidy!: Vid[]; details!: Detail[];
    x = 0; i = 0; y = 0;
    det = ""; a = "";
    isPanel:boolean = false;
    vid_rem!: Object;

    constructor(private httpClient: HttpClient, private router:Router, private service:ServiceService) {
        httpClient.get<Remont[]>(environment.UrlRemont)
        .subscribe(result=>{
            this.remonty = result;
            for (let remont of this.remonty){
                remont.date_start = remont.date_start.substring(8, 10) + "." + remont.date_start.substring(5, 7) + "." + remont.date_start.substring(0, 4);
                remont.date_end = remont.date_end.substring(8, 10) + "." + remont.date_end.substring(5, 7) + "." + remont.date_end.substring(0, 4);
                remont.time_start = remont.time_start.substring(0, 5);
                remont.time_end = remont.time_end.substring(0, 5);
                if (remont.date_start+remont.time_start==remont.date_end+remont.time_end) remont.date_end=remont.time_end="...";
            }
        })


        httpClient.get<Detail[]>(environment.UrlDetail)
            .subscribe(result=>{
            this.details = result;
        })
    }

    Clear(){
        this.x = 0; this.det = ""; this.y = 0
    }

    Numeracia(){
        this.y++; return this.y
    }

    Adapt(b: Object){
        this.vid_rem=Object.values(b)[1];
    }

    showPanel() {
        this.isPanel = !this.isPanel;
    }

    ShowAddRemont(){
        this.router.navigate(["addRemontForm"]);
    }

    Editor(remont:Remont):void{
        localStorage.setItem("id",remont.id.toString());
        this.router.navigate(["editRemontForm"]);
    }

    Delete(remont:Remont){
        this.service.deleteRemont(remont)
        .subscribe(data =>{
            this.remonty=this.remonty.filter(r => r !== remont );
            alert("Запись удалена!");
            this.httpClient.get<Detail[]>(environment.UrlDetail)
                .subscribe(result=>{
                this.details = result;
            })
            this.router.navigate(["remontyList"]);
        })
    }
}
