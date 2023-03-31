import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vid } from 'src/app/components/vidRemonta/vid/Vid';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit-vid',
  templateUrl: './edit-vid.component.html',
  styleUrls: ['./edit-vid.component.css']
})

export class EditVidComponent implements OnInit{

    vid!: Vid;
    constructor(private router:Router, private service:ServiceService) { }

    ngOnInit(){
      this.Editor();
    }

    Editor(){
      let id=localStorage.getItem("id");
      console.log("From Editor in EditComp "+id);
      this.service.getVidId(parseInt(id!,10))
      .subscribe(data =>{
      this.vid=data;
      })
    }

    Actualisation(vid:Vid){
      this.service.updateVid(vid)
      .subscribe(data =>{
        this.vid=data;
        alert("Изменения сохранены");
        this.router.navigate(["vidList"]);
      })
    }
}
