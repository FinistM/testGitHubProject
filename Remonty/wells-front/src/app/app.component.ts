import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wells-front';

   constructor(private router:Router){this.router.navigate(["remontList"]);}
   //constructor(private router:Router){this.router.navigate(["spravList"]); }
   //constructor(private router:Router){this.router.navigate(["prichProstList"]); }

   ShowListRemontov(){
        this.router.navigate(["remontList"]);
   }

   ShowListVidov(){
        this.router.navigate(["vidList"]);
   }

   ShowListSpravochnikov(){
        this.router.navigate(["spravList"]);
   }
}
