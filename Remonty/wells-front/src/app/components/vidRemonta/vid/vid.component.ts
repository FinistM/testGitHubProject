import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Vid } from './Vid';

@Component({
  selector: 'app-vid',
  templateUrl: './vid.component.html',
  styleUrls: ['./vid.component.css']
})
export class VidComponent {
    title = 'vid-angular-project';
    vidy!: Vid[];

    constructor(private httpClient: HttpClient, private router:Router, private service:ServiceService) {
      httpClient.get<Vid[]>("http://localhost:8081/vidy")
      //httpClient.get<Vid[]>("http://192.168.7.111:8081/vidy")
      .subscribe(result=>{
        this.vidy = result;
      })
    }

       ShowAddRemont(){
           this.router.navigate(["addVidForm"]);
       }

    Editor(vid:Vid):void{
      localStorage.setItem("id",vid.id.toString());
      this.router.navigate(["editVidForm"]);
    }

    Delete(vid:Vid){

      this.service.deleteVid(vid)
      .subscribe(data =>{
        this.vidy=this.vidy.filter(r => r !== vid );
        this.router.navigate(["vidyList"]);
        alert("Запись удалена!");
      })
    }
}
