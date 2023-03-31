import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RemontComponent } from './components/remonty/remont/remont.component';
import { AddComponent } from './components/remonty/add/add.component';
import { EditComponent } from './components/remonty/edit/edit.component';
import { VidComponent } from './components/vidRemonta/vid/vid.component';
import { EditVidComponent } from './components/vidRemonta/edit-vid/edit-vid.component';
import { AddVidComponent } from './components/vidRemonta/add-vid/add-vid.component';

const appRoutes: Routes =[
  {path: 'addRemontForm', component: AddComponent},
  {path: 'editRemontForm', component: EditComponent},
  {path: 'remontList', component: RemontComponent},
  {path: 'vidList', component: VidComponent},
  {path: 'addVidForm', component: AddVidComponent},
  {path: 'editVidForm', component: EditVidComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    RemontComponent,
    AddComponent,
    EditComponent,
    VidComponent,
    EditVidComponent,
    AddVidComponent
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
