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

   ShowList(){
        this.router.navigate(["remontList"]);
   }

   ShowAdd(){
       this.router.navigate(["addForm"]);
   }
}
