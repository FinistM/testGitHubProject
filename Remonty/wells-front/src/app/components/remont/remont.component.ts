import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Remont } from './Remont';

@Component({
  selector: 'app-remont',
  templateUrl: './remont.component.html',
  styleUrls: ['./remont.component.css']
})
export class RemontComponent {
    title = 'remont-angular-project';
    remonty!: Remont[];

    constructor(private httpClient: HttpClient, private router:Router, private service:ServiceService) {
    //httpClient.get<Remont[]>("http://localhost:8081/remonty")
      httpClient.get<Remont[]>("http://192.168.7.111:8081/remonty")
      .subscribe(result=>{
        this.remonty = result;

      })
    }

  Editor(remont:Remont):void{
    localStorage.setItem("id",remont.id.toString());
    this.router.navigate(["editForm"]);
  }

  Delete(remont:Remont){

    this.service.deleteRemont(remont)
    .subscribe(data =>{
      this.remonty=this.remonty.filter(r => r !== remont );
      this.router.navigate(["remontyList"]);
      alert("Запись удалена!");
    })
  }
}
