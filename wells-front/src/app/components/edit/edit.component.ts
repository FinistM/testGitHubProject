import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Remont } from 'src/app/components/remont/Remont';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit{

    remont!: Remont;
    constructor(private router:Router, private service:ServiceService) { }

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
