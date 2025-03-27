import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spravlist',
  templateUrl: './spravlist.component.html',
  styleUrls: ['./spravlist.component.css']
})
export class SpravListComponent {
   constructor(private router:Router){}

   ShowListVidov(){
        this.router.navigate(["vidList"]);
   }

   ShowListPrichinaProstoia(){
        this.router.navigate(["prichProstList"]);
   }
}
