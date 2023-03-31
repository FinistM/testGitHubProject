import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Vid } from 'src/app/components/vidRemonta/vid/Vid';

@Component({
  selector: 'app-add-vid',
  templateUrl: './add-vid.component.html',
  styleUrls: ['./add-vid.component.css']
})

export class AddVidComponent implements OnInit{

   vid!: Vid;
   constructor(private router:Router, private service:ServiceService) {}

   ngOnInit(){
   }

   Add(name:String){
     this.service.createVid(name)
     .subscribe(data => {
        alert("Информация добавлена");
        this.router.navigate(["vidList"]);
     })
   }
}
