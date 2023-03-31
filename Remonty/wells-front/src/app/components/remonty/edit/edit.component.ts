import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Remont } from 'src/app/components/remonty/remont/Remont';
import { ServiceService } from 'src/app/Service/service.service';
import { Vid } from 'src/app/components/vidRemonta/vid/Vid';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit{

    remont!: Remont;
    vidy!: Vid[];
    constructor(private httpClient: HttpClient, private router:Router, private service:ServiceService) {
      httpClient.get<Vid[]>("http://localhost:8081/vidy")
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
      })
    }

    Actualisation(remont:Remont){
      this.service.updateRemont(remont)
      .subscribe(data =>{
        this.remont=data;
        alert("Изменения сохранены");
        this.router.navigate(["remontList"]);
      })
    }
}
