import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Remont } from './Remont';
import { Vid } from 'src/app/components/vidRemonta/vid/Vid';

@Component({
  selector: 'app-remont',
  templateUrl: './remont.component.html',
  styleUrls: ['./remont.component.css']
})
export class RemontComponent {
    title = 'remont-angular-project';
    remonty!: Remont[];
    vidy!: Vid[];
    x=0;
    ditali = "";
    isPanel:boolean = false;



    constructor(private httpClient: HttpClient, private router:Router, private service:ServiceService) {
      httpClient.get<Remont[]>("http://localhost:8081/remonty")
      //httpClient.get<Remont[]>("http://192.168.7.111:8081/remonty")
      .subscribe(result=>{
        this.remonty = result;
        console.log(this.remonty);
      })

      httpClient.get<Vid[]>("http://localhost:8081/vidy")
      //httpClient.get<Vid[]>("http://192.168.7.111:8081/vidy")
      .subscribe(result=>{
        this.vidy = result;
        console.log(this.vidy);
      })
    }

    check(a:string){
        for(let remont of this.remonty){
            if(a==remont.vid_remonta){
              this.x+=1;
              this.ditali=this.ditali+remont.start_date_day+"."
              +remont.start_date_month+"."+remont.start_date_year
              +"-"+remont.end_date_day+"."+remont.end_date_month+"."
              +remont.end_date_year+" "+remont.mestorojdenie+" / "
              +remont.kyst+" / "+remont.skvajina+"; ";
            }
        }
    }

  Empty(){this.x=0; this.ditali=""}

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
      this.router.navigate(["remontyList"]);
      alert("Запись удалена!");
    })
  }
}
