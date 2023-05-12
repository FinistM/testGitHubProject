import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { PrichProstoia } from './PrichProstoia';
import { VidPrichProstoia } from 'src/app/components/vidPrichProstoia/vid-prichprostoia/VidPrichProstoia';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-prichprostoia',
    templateUrl: './prichprostoia.component.html',
    styleUrls: ['./prichprostoia.component.css']
})

export class PrichprostoiaComponent{
    isEdit: boolean[] = [];
    prichinyProstoia!: PrichProstoia[];
    vidyPrichProstoia!: VidPrichProstoia[];
    open: string[]= [];
    parametr: string[] = ["","","",""];
    showPrichOrGroup = true;
    openAddPan=false;
    AddClickText="+";
    prichina: object[]= [];
    vidPrichiny: object[]= [];
    i!:number;



    constructor(private httpClient: HttpClient, private router:Router, private service:ServiceService) {
        httpClient.get<PrichProstoia[]>(environment.UrlPrichProstoia)
        .subscribe(result=>{
            this.prichinyProstoia = result;
            //console.log(result);
            for (let prich of this.prichinyProstoia){
                this.prichina.push(prich);
            }
//             for (this.i=0;this.i<this.prichina.length;this.i++)
//             {
//                 console.log(Object.values(this.prichina[this.i])[1]);
//             }
        })

        httpClient.get<VidPrichProstoia[]>(environment.UrlVidPrichProstoia)
        .subscribe(result=>{
            this.vidyPrichProstoia = result;
            for (let vidPrich of this.vidyPrichProstoia){
                this.vidPrichiny.push(vidPrich);
                this.open.push("+");
            }
        })

    }

    showEdit(i:number) {
        this.isEdit[i] = !this.isEdit[i];
        if (this.open[i] == "+") this.open[i]="-";
        else this.open[i]="+";
    }

    Test(x:object, y:object){
        if(String(Object.values(Object.values(x)[2])[1])==String(Object.values(y)[1])) return true; //String(Object.values(x)[1])
        else return false;
    }

    AdaptPrich(x:object){
        return String(Object.values(x)[1]);
    }

    AdaptVid(x:object){
        return String(Object.values(x)[1]);
    }

    GetPar(x:object){
        this.parametr[0] = String(Object.values(x)[0]);
        this.parametr[1] = String(Object.values(x)[1]);
        this.parametr[2] = String(Object.values(Object.values(x)[2])[0]);
        this.parametr[3] = String(Object.values(Object.values(x)[2])[1]);
        this.showPrichOrGroup=false;
    }

    GetGroup(y:object) {
        this.showPrichOrGroup=true;
        this.parametr[2] = String(Object.values(y)[0]);
        this.parametr[3] = String(Object.values(y)[1]);
    }

    ShowAddPanel(){
        this.openAddPan=!this.openAddPan;
        if (this.openAddPan==false) this.AddClickText="+"
        else this.AddClickText="-";
    }
}
