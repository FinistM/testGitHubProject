import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RemontComponent } from './components/remont/remont.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

const appRoutes: Routes =[
  {path: 'addForm', component: AddComponent},
  {path: 'editForm', component: EditComponent},
  {path: 'remontList', component: RemontComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    RemontComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
