import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Vid } from './Vid';
import { environment } from 'src/environments/environment';
import { Detail } from 'src/app/components/details/detail/Detail';


@Component({
  selector: 'app-vid',
  templateUrl: './vid.component.html',
  styleUrls: ['./vid.component.css']
})
export class VidComponent {
    title = 'vid-angular-project';
    vidy!: Vid[];
    details!:Detail[];
    i = 0; k = 0;

    constructor(private httpClient: HttpClient, private router:Router, private service:ServiceService) {
        httpClient.get<Vid[]>(environment.UrlVid)
        .subscribe(result=>{
            this.vidy = result;
        })
    }

    Clear(){
        this.i = 0
    }

    Numeracia(){
        this.i++; return this.i
    }

    ShowAddRemont(){
        this.router.navigate(["addVidForm"]);
    }

    Editor(vid:Vid):void{
        localStorage.setItem("id",vid.id.toString());
        this.router.navigate(["editVidForm"]);
    }

    Delete(vid:Vid){
        this.httpClient.get<Detail[]>(environment.UrlDetail)
            .subscribe(result=>{
            this.details = result;
            this.k = 0;
            for (let detail of this.details) {
                if (vid.name == Object.values(detail)[0] && 0 == Object.values(detail)[1]) { this.k = 1; }
            }
            if (this.k == 1)
            this.service.deleteVid(vid)
            .subscribe(data =>{
                this.vidy=this.vidy.filter(r => r !== vid );
                this.router.navigate(["vidyList"]);
                alert("Запись удалена!");
            })
            else alert("Невозможно удалить!\nРешение: удалите или измените информацию в списке ремонтов.");
        })
    }
}
