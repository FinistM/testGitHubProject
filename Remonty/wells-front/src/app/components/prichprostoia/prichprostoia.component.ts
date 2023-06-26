import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { PrichProstoia } from './PrichProstoia';
import { GrouppaPrichProstoia } from './GrouppaPrichProstoia';
import { PodgrouppaPrichProstoia } from './PodgrouppaPrichProstoia';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-prichprostoia',
    templateUrl: './prichprostoia.component.html',
    styleUrls: ['./prichprostoia.component.css']
})

export class PrichprostoiaComponent{
    prichiny!: PrichProstoia[];                                                                                         //массив объектов PrichProstoia
    grouppy!: GrouppaPrichProstoia[];                                                                                   //массив объектов GrouppaPrichProstoia
    podgrouppy: PodgrouppaPrichProstoia[] = [];                                                                         //массив объектов PodgrouppaPrichProstoia

    groupOpen: (boolean | string)[][] = [];                                                                             //массив строк и бинарных значений для раскрывающихся элементов групп
    podgroupOpen: (boolean | string)[][] = [];                                                                          //массив строк и бинарных значений для раскрывающихся элементов подгрупп
    podgroupForSelect: string[] = [];                                                                                   //массив со значениями для селектора подгрупп (просмотр)
    podgroupForSelectInAdd: string[] = [];                                                                              //массив со значениями для селектора подгрупп (добавление)

    sure: any[] = [0, 0, ""];                                                                                           //массив значений для регулирования окна и процесса подтверждения

    parametr: string[] = ["","","","",""];                                                                              //массив значений для работы с параметрами объектов
    showHtmlGroup = 0;                                                                                                  //переменная для адаптирования панели просмотра к выбронному объекту

    selectAdd: number = 0;                                                                                              //переменная для адаптирования панели добавления к выбронному объекту
    prichina: object[]= [];
    //vidPrichiny: object[]= [];
    //i!:number;
    searching:string = "";                                                                                              //переменная с данными поиска

    constructor(private httpClient: HttpClient, private router:Router, private service:ServiceService) {                //конструктор выполняется при запуске программы
        httpClient.get<PrichProstoia[]>(environment.UrlPrichProstoia)                                                   //запрашивает данные у сервера
        .subscribe(result=>{
            this.prichiny = result;                                                                                     //помещает результат запроса в массив объектов
        })

        httpClient.get<GrouppaPrichProstoia[]>(environment.UrlGrouppaPrichProstoia)                                     //запрашивает данные у сервера
        .subscribe(result=>{
            this.grouppy = result;                                                                                      //помещает результат запроса в массив объектов
            for (let group of this.grouppy) this.groupOpen.push([false,"+"]);
        })

        httpClient.get<PodgrouppaPrichProstoia[]>(environment.UrlPodgrouppaPrichProstoia)                               //запрашивает данные у сервера
        .subscribe(result=>{
            this.podgrouppy = result;                                                                                   //помещает результат запроса в массив объектов
            for (let podgroup of this.podgrouppy) this.podgroupOpen.push([false,"+"]);
        })
    }

    showGroup(i:number) {                                                                                               //определяет, показывать ли содержимое группы
        this.groupOpen[i][0] = !this.groupOpen[i][0];                                                                   //меняет значение на противоположное
        if (this.groupOpen[i][0] == true) this.groupOpen[i][1]="-";
        else this.groupOpen[i][1]="+";
    }

    showPodgroup(j:number) {                                                                                            //определяет, показывать ли содержимое подгруппы
        this.podgroupOpen[j][0] = !this.podgroupOpen[j][0];                                                             //меняет значение на противоположное
        if (this.podgroupOpen[j][0] == true) this.podgroupOpen[j][1]="-";
        else this.podgroupOpen[j][1]="+";
    }

    ChosePodgroup(x:object, y:object){                                                                                  //отсеивает подгруппы, не относящиеся к группе
        if(String(Object.values(x)[1])==String(Object.values(Object.values(y)[3])[1])) return true;                     //проверяет соответствие параметра подгруппы и имени группы
        else return false;
    }

    ChosePrichina(x:any, y:object){                                                                                     //отсеивает причины, не относящиеся к группе
        if (x!=null && Object.values(y)[3]!=null) { if(String(Object.values(x)[1]) ==                                   //проверяет соответствие параметра причины в подгруппе и имени вподгруппы
        String(Object.values(Object.values(y)[3])[1])) return true; else return false;}
        else return false;
    }

    ChosePrichinaInGroup(x:object, y:object){                                                                           //отсеивает причины, не относящиеся к группе
        if (Object.values(y)[3]==null) { if(String(Object.values(x)[1])==String(Object.values(Object.values(y)[4])[1])) //проверяет соответствие параметра причины в группе и имени группы
        return true; else return false }
        else return false;
    }

    ArhivingGroup(groupPrichObj:Object){                                                                                //скрывает или показывает группу и анализирует ост набор данных
        for (let group of this.grouppy)                                                                                 //цикл
            if (Object.values(groupPrichObj)[1] == Object.values(group)[1])                                             //если имя группы найдено
            {
                group.arhivgrouppa = !group.arhivgrouppa;                                                               //меняет значение параметра на противоположное
                this.service.updateGrouppaPrichProstoia(group)                                                          //отправляет данные группы для обновления
                .subscribe(data =>{
                    this.httpClient.get<GrouppaPrichProstoia[]>(environment.UrlGrouppaPrichProstoia)                    //получает обновленные данные по подгруппам
                    .subscribe(result=>{
                        this.grouppy = result;                                                                          //помещает результат запроса в массив объектов
                    })
                })
                for (let podgroup of this.podgrouppy)                                                                   //цикл
                {
                    if (Object.values(groupPrichObj)[1] == Object.values(Object.values(podgroup)[3])[1])
                    {
                        podgroup.arhivpodgrouppa = group.arhivgrouppa;
                        this.service.updatePodgrouppaPrichProstoia(podgroup)
                        .subscribe(data =>{
                            this.httpClient.get<PodgrouppaPrichProstoia[]>(environment.UrlPodgrouppaPrichProstoia)
                            .subscribe(result=>{
                                this.podgrouppy = result;
                            })
                        })
                        for (let prichina of this.prichiny)
                            if (Object.values(prichina)[3]!=null)
                            {
                                if (Object.values(podgroup)[1] == Object.values(Object.values(prichina)[3])[1])
                                {
                                    prichina.arhivprichin = group.arhivgrouppa;
                                    this.service.updatePrichProstoia(prichina)
                                    .subscribe(data =>{
                                        this.httpClient.get<PrichProstoia[]>(environment.UrlPrichProstoia)
                                        .subscribe(result=>{
                                            this.prichiny = result;
                                        })
                                    })
                                }
                            }
                            else
                            {
                                if (Object.values(group)[1] == Object.values(Object.values(prichina)[4])[1])
                                {
                                    prichina.arhivprichin = group.arhivgrouppa;
                                    this.service.updatePrichProstoia(prichina)
                                    .subscribe(data =>{
                                        this.httpClient.get<PrichProstoia[]>(environment.UrlPrichProstoia)
                                        .subscribe(result=>{
                                            this.prichiny = result;
                                        })
                                    })
                                }
                            }

                    }
                }
            }
    }

    ArhivingPodgroup(podgroupPrichObj:Object){                                                                          //скрывает или показывает подгруппу и анализирует ост наб данных
        let k = 0;

        for (let podgroup of this.podgrouppy)
        {
            if (Object.values(podgroupPrichObj)[1] == Object.values(podgroup)[1])
            {
                podgroup.arhivpodgrouppa = !podgroup.arhivpodgrouppa;                                                   //меняет значение на противоположное
                this.service.updatePodgrouppaPrichProstoia(podgroup)
                .subscribe(data =>{
                    this.httpClient.get<PodgrouppaPrichProstoia[]>(environment.UrlPodgrouppaPrichProstoia)
                    .subscribe(result=>{
                        this.podgrouppy = result;
                    })
                })
                for (let prichina of this.prichiny)
                    if (Object.values(prichina)[3]!=null)
                    {
                        if (Object.values(podgroup)[1] ==
                        Object.values(Object.values(prichina)[3])[1])
                        {
                            prichina.arhivprichin = podgroup.arhivpodgrouppa;;
                            this.service.updatePrichProstoia(prichina)
                            .subscribe(data =>{
                                this.httpClient.get<PrichProstoia[]>(environment.UrlPrichProstoia)
                                .subscribe(result=>{
                                    this.prichiny = result;
                                })
                            })
                        }
                    }
                    else if (Object.values(Object.values(prichina)[4])[1] ==
                    Object.values(Object.values(podgroupPrichObj)[3])[1]
                    && Object.values(prichina)[2] == true) k++;
            }
            if (Object.values(podgroup)[3]!=null) if (Object.values(Object.values(podgroup)[3])[1] ==
            Object.values(Object.values(podgroupPrichObj)[3])[1]
            && Object.values(podgroup)[2] == true) k++;
        }

        for (let group of this.grouppy)
            if (Object.values(podgroupPrichObj)[3] != null)
                if (Object.values(Object.values(podgroupPrichObj)[3])[1] == Object.values(group)[1])
                {
                    if (k == 0)  group.arhivgrouppa = false;
                    else group.arhivgrouppa = true;
                    this.service.updateGrouppaPrichProstoia(group)
                    .subscribe(data =>{
                        this.httpClient.get<GrouppaPrichProstoia[]>(environment.UrlGrouppaPrichProstoia)
                        .subscribe(result=>{
                            this.grouppy = result;
                        })
                    })
                }
    }

    ArhivingPrichina(prichinaPrichObj:Object){                                                                          //скрывает или показывает причину и анализирует ост наб данных
        let k = 0;
        let checkFullGroup = 0;
        let objGroup = Object.values(prichinaPrichObj)[4].grouppa;

        for (let prichina of this.prichiny)
        {
            if (Object.values(prichinaPrichObj)[1] == Object.values(prichina)[1])
            {
                prichina.arhivprichin = !prichina.arhivprichin;
                this.service.updatePrichProstoia(prichina)
                .subscribe(data =>{
                    this.httpClient.get<PrichProstoia[]>(environment.UrlPrichProstoia)
                    .subscribe(result=>{
                        this.prichiny = result;
                    })
                })
            }
            if (Object.values(prichinaPrichObj)[3]!=null && Object.values(prichina)[3]!=null)
            {
                if (Object.values(Object.values(prichinaPrichObj)[3])[1] ==
                Object.values(Object.values(prichina)[3])[1] && Object.values(prichina)[2] == true) k++;
            }
            else if (Object.values(prichinaPrichObj)[4].grouppa ==
            Object.values(prichina)[4].grouppa && Object.values(prichina)[2] == true) checkFullGroup++;
        }

        for (let podgroup of this.podgrouppy)
        {
            if (Object.values(prichinaPrichObj)[3]!=null)
            {
                if (Object.values(prichinaPrichObj)[3].podgrouppa == podgroup.podgrouppa)
                {
                    let objGroup = Object.values(Object.values(prichinaPrichObj)[3])[3];
                    if (k == 0) podgroup.arhivpodgrouppa = false;
                    else podgroup.arhivpodgrouppa = true;
                    this.service.updatePodgrouppaPrichProstoia(podgroup)
                    .subscribe(data =>{
                        this.httpClient.get<PodgrouppaPrichProstoia[]>(environment.UrlPodgrouppaPrichProstoia)
                        .subscribe(result=>{
                            this.podgrouppy = result;
                        })
                    })
                }

            }
            if (objGroup == Object.values(podgroup)[3].grouppa
            && podgroup.arhivpodgrouppa==true) checkFullGroup++;
        }

        for (let group of this.grouppy)
            if (objGroup == group.grouppa)
            {
                if(checkFullGroup==0) group.arhivgrouppa = false;
                else group.arhivgrouppa = true;
                this.service.updateGrouppaPrichProstoia(group)
                .subscribe(data =>{
                    this.httpClient.get<GrouppaPrichProstoia[]>(environment.UrlGrouppaPrichProstoia)
                    .subscribe(result=>{
                        this.grouppy = result;
                    })
                })
            }
    }

    GetParametri(x:object,y:number){                                                                                    //передает параметры в форму просмотра(редактирования)
        const arhivSelect = (document.getElementById('podgroupSelector')) as HTMLSelectElement;
        this.showHtmlGroup=y;
        this.parametr[0] = String(Object.values(x)[1]);
        if (y>0)
        {
            if (Object.values(x)[3]!=null) this.parametr[1] = String(Object.values(Object.values(x)[3])[1]);
            else this.parametr[1]=""
        }
        if (y>1)
        {
            this.parametr[2] = String(Object.values(Object.values(x)[4])[1]);
            this.podgroupForSelect = [];
            for (let podgroup of this.podgrouppy)
                if(this.parametr[2]==String(Object.values(podgroup)[3].grouppa))
                    {this.podgroupForSelect.push(String(Object(podgroup.podgrouppa)));
                    arhivSelect.selectedIndex = 0}
        }
        this.parametr[3] = String(Object.values(x)[0]);
    }

    FillingMassivePodgroups(x: string)                                                                                  //заполняет селектор подгруппы в зависимости от выбранной группы (просмотр)
    {
        const arhivSelect = (document.getElementById('podgroupSelector')) as HTMLSelectElement;
        this.parametr[1]="";
        this.parametr[2]=x;
        this.podgroupForSelect = [];
        for (let podgroup of this.podgrouppy)
            if(x==String(Object.values(podgroup)[3].grouppa))
                this.podgroupForSelect.push(String(Object(podgroup.podgrouppa)));
    }

    FillingMassivePodgroupsForAddPrich(x: string)                                                                       //заполняет селектор подгруппы в зависимости от выбранной группы (добавление)
    {
        this.podgroupForSelectInAdd = [];
        for (let podgroup of this.podgrouppy)
            if(x==String(Object.values(podgroup)[3].grouppa))
                this.podgroupForSelectInAdd.push(String(Object(podgroup.podgrouppa)));
    }

    ShowAddPanel(n:number){                                                                                             //открыть форму для добавления
        this.selectAdd=n
        if (this.selectAdd==0) { this.selectAdd=1 }
        else { this.selectAdd=0 }
    }

    SelectForAdd(n: number){                                                                                            //изменения стиля и содержания формы в зависимости от выбора пользователя
        this.selectAdd=n;
        let x,y,z: string;
        if (n==1) { x='prichinaAdd'; y='podgroupAdd'; z='groupAdd' }
        else if (n==2) { x='groupAdd'; y='prichinaAdd'; z='podgroupAdd' }
        else { x='groupAdd'; y='podgroupAdd'; z='prichinaAdd' }

        const prich = document.getElementById(x) as HTMLElement;
        prich.style.backgroundColor = '#A0A0A0';
        prich.style.color = 'white';
        const podgroup = document.getElementById(y) as HTMLElement;
        podgroup.style.backgroundColor = '#A0A0A0';
        podgroup.style.color = 'white';
        const group = document.getElementById(z) as HTMLElement;
        group.style.backgroundColor = 'white';
        group.style.color = '#999999';

    }

    AddGroupOfPrich(groups:String){                                                                                     //добавление группы ремонта
        if (groups != "") {
            let k = 0;
            for (let group of this.grouppy)
                if (groups.toLowerCase() == group.grouppa.toLowerCase()) k = 1;
            if (k == 1) alert("Наименование занято, выберите другое!")
            else {
                this.sure[0]=1;
                this.sure[2]="добавить";
                const promise = new Promise<void>((resolve) => {
                    const intervalId = setInterval(() => {
                        if (this.sure[0] == 0) {
                            clearInterval(intervalId);
                            resolve();
                        }
                    }, 100);
                });

                promise.then(() => {
                    if (this.sure[1]==1) {
                        this.service.createGrouppaPrichProstoia(groups, true).subscribe(data =>{
                            this.groupOpen = [];
                            this.httpClient.get<GrouppaPrichProstoia[]>(environment.UrlGrouppaPrichProstoia).subscribe(result=>{
                                this.grouppy = result;
                                for (let group of this.grouppy) this.groupOpen.push([false,"+"]);
                            })
                            alert("Группа добавлена");
                            this.sure=[0,0,""];
                        });
                    }
                });
            }
        } else {
            alert("Проверьте заполнение полей!");
        }
    }

    AddPodgroupOfPrich(podgroups:String, groups:String){                                                                //добавление подгруппы ремонта
        if (groups != "" && podgroups != "")
        {
            let k = false;
            for (let podgroup of this.podgrouppy)
                if (podgroups.toLowerCase() == podgroup.podgrouppa.toLowerCase()) {k = true; break}
            if (k == true) alert("Наименование занято, выберите другое!");
            else
            {
                this.sure[0]=1;
                this.sure[2]="добавить";
                const promise = new Promise<void>((resolve) => {
                    const intervalId = setInterval(() => {
                        if (this.sure[0] == 0) {
                            clearInterval(intervalId);
                            resolve();
                        }
                    }, 100);
                });

                promise.then(() => {
                    if (this.sure[1]==1) {
                        for (let group of this.grouppy)
                            if (group.grouppa == groups)
                            {
                                this.service.createPodgrouppaPrichProstoia(podgroups, true, group)
                                .subscribe(data =>{
                                    this.httpClient.get<PodgrouppaPrichProstoia[]>(environment.UrlPodgrouppaPrichProstoia)
                                    .subscribe(result=>{
                                        this.podgrouppy = result;
                                        this.podgroupOpen = [];
                                        for (let podgroup of this.podgrouppy) this.podgroupOpen.push([false,"+"]);
                                    })
                                    alert("Подгруппа добавлена");
                                })
                                break
                            }
                        }
                });
            }
        }
        else alert("Проверьте заплнение полей!");
    }

    AddPrich(prichina:String, podgroups:String, groups:String){                                                         //добавление причины ремонта
        if (groups != "")
        {
            let k = 0;
            for (let prich of this.prichiny) if (prichina == prich.prichina) k = 1;
            if (k == 1) alert("Наименование занято, выберите другое!");
            else
            {
                this.sure[0]=1;
                this.sure[2]="добавить";
                const promise = new Promise<void>((resolve) => {
                    const intervalId = setInterval(() => {
                        if (this.sure[0] == 0) {
                            clearInterval(intervalId);
                            resolve();
                        }
                    }, 100);
                });

                promise.then(() => {
                    if (this.sure[1]==1) {
                        for (let group of this.grouppy)
                        {
                            if (String(group.grouppa) == groups)
                            {
                                for (let podgroup of this.podgrouppy)
                                {
                                    if (podgroups != "" && String(podgroup.podgrouppa) == podgroups)
                                    {
                                        this.service.createPrichProstoia(prichina, true, podgroup, group)
                                        .subscribe(data =>{
                                            this.httpClient.get<PrichProstoia[]>(environment.UrlPrichProstoia)
                                            .subscribe(result=>{
                                                this.prichiny = result;
                                            })
                                            alert("Причина добавлена");
                                        })
                                        break
                                    }
                                    else if (podgroups == "")
                                        {
                                            this.service.createPrichProstoia(prichina, true, null as any, group)
                                            .subscribe(data =>{
                                                this.httpClient.get<PrichProstoia[]>(environment.UrlPrichProstoia)
                                                .subscribe(result=>{
                                                    this.prichiny = result;
                                                })
                                                alert("Причина добавлена");
                                            })
                                            break
                                        }
                                }
                                break
                            }
                        }
                    }
                });
            }
        }
        else alert("Проверьте заплнение полей!");
    }

    DeleteGroupPrich(id:String){                                                                                        //удаление группы
        let k=false;
        for (let podgroup of this.podgrouppy)
            if (Object.values(podgroup)[3].id == id) { k=true; break }
        if (k==true) alert("Чтобы удалить группу удалите включенные элементы")
        else
        {
            this.sure[0]=1;
            this.sure[2]="удалить";
            const promise = new Promise<void>((resolve) => {
                const intervalId = setInterval(() => {
                    if (this.sure[0] == 0) {
                        clearInterval(intervalId);
                        resolve();
                    }
                }, 100);
            });

            promise.then(() => {
                if (this.sure[1]==1) {
                    for (let group of this.grouppy)
                        if (Number(group.id)==Number(id))
                        {
                            this.service.deleteGrouppaPrichProstoia(group)
                            .subscribe(data =>{
                                alert("Группа удалена");
                                this.parametr[0] = "";
                                this.parametr[1] = "";
                                this.parametr[2] = "";
                                this.parametr[3] = "";
                                this.httpClient.get<GrouppaPrichProstoia[]>(environment.UrlGrouppaPrichProstoia)
                                .subscribe(result=>{
                                    this.grouppy = result;
                                })
                            })
                            break
                        }
                }
            });
        }
    }

    DeletePodgroupPrich(id:String){                                                                                     //удаление подгруппы
        let k=false;
        for (let prich of this.prichiny)
            if (Object.values(prich)[3]!=null) { if (Object.values(prich)[3].id == id) {k=true;break} }
        if (k==true) alert("Чтобы удалить подгруппу удалите включенные элементы")
        else
        {
            this.sure[0]=1;
            this.sure[2]="удалить";
            const promise = new Promise<void>((resolve) => {
                const intervalId = setInterval(() => {
                    if (this.sure[0] == 0) {
                        clearInterval(intervalId);
                        resolve();
                    }
                }, 100);
            });

            promise.then(() => {
                if (this.sure[1]==1) {
                    for (let podgroup of this.podgrouppy)
                        if (Number(podgroup.id)==Number(id))
                        {
                            this.service.deletePodgrouppaPrichProstoia(podgroup)
                            .subscribe(data =>{
                                alert("Подгруппа удалена");
                                this.parametr[0] = "";
                                this.parametr[1] = "";
                                this.parametr[2] = "";
                                this.parametr[3] = "";
                                this.httpClient.get<PodgrouppaPrichProstoia[]>(environment.UrlPodgrouppaPrichProstoia)
                                .subscribe(result=>{
                                    this.podgrouppy = result;
                                })
                            })
                            break
                        }
                }
            });
        }
    }

    DeletePrich(id:String){                                                                                             //удаление причины
        this.sure[0]=1;
        this.sure[2]="удалить";
        const promise = new Promise<void>((resolve) => {
            const intervalId = setInterval(() => {
                if (this.sure[0] == 0) {
                    clearInterval(intervalId);
                    resolve();
                }
            }, 100);
        });

        promise.then(() => {
            if (this.sure[1]==1)
            {
                for (let prich of this.prichiny)
                    if (Number(prich.id)==Number(id))
                    {
                        this.service.deletePrichProstoia(prich)
                        .subscribe(data =>{
                            alert("Причина удалена");
                            this.parametr[0] = "";
                            this.parametr[1] = "";
                            this.parametr[2] = "";
                            this.parametr[3] = "";
                            this.httpClient.get<PrichProstoia[]>(environment.UrlPrichProstoia)
                            .subscribe(result=>{
                                this.prichiny = result;
                            })
                        })
                        break;
                    }
            }
        });
    }

    UpdateGroup(id:String, newGroupName:string){                                                                        //обновление данных группы
        if (newGroupName!="") {
            let k=false;
            for (let group of this.grouppy) if(String(group.grouppa) == newGroupName
            && String(group.grouppa)!=this.parametr[0]) {k=true;alert("Наименование занято, выберите другое!");break}
            if (k == false)
            {
                this.sure[0]=1;
                this.sure[2]="изменить";
                const promise = new Promise<void>((resolve) => {
                    const intervalId = setInterval(() => {
                        if (this.sure[0] == 0) {
                            clearInterval(intervalId);
                            resolve();
                        }
                    }, 100);
                });

                promise.then(() => {
                    if (this.sure[1]==1) {
                        for (let group of this.grouppy)
                            if (Number(group.id)==Number(id))
                            {
                                group.grouppa = newGroupName;
                                this.service.updateGrouppaPrichProstoia(group)
                                .subscribe(data =>{
                                    this.httpClient.get<GrouppaPrichProstoia[]>(environment.UrlGrouppaPrichProstoia)
                                    .subscribe(result=>{
                                        this.grouppy = result;
                                        this.httpClient.get<PodgrouppaPrichProstoia[]>(environment.UrlPodgrouppaPrichProstoia)
                                        .subscribe(result=>{
                                            this.podgrouppy = result;
                                        })
                                        this.groupOpen = [];
                                        for (let group of this.grouppy) this.groupOpen.push([false,"+"]);
                                    })
                                })
                                alert("Данные группы изменены!");
                                break;
                            }
                    }
                });
            }
        }
        else alert("Проверьте заплнение полей!");
    }

    UpdatePodgroup(id:String, newPodgroupName:string, groupName:Object){                                                //обновление данных подгруппы
        if (newPodgroupName!="" && groupName!="")
        {
            let k=false;
            for (let podgroup of this.podgrouppy)
                if(String(podgroup.podgrouppa) == newPodgroupName
                && String(podgroup.podgrouppa)!=this.parametr[0])
                {
                    k=true;alert("Наименование занято, выберите другое!");
                    break
                }
            if (k == false)
            {
                this.sure[0]=1;
                this.sure[2]="изменить";
                const promise = new Promise<void>((resolve) => {
                    const intervalId = setInterval(() => {
                        if (this.sure[0] == 0) {
                            clearInterval(intervalId);
                            resolve();
                        }
                    }, 100);
                });

                promise.then(() => {
                    if (this.sure[1]==1) {
                        for (let podgroup of this.podgrouppy)
                            if (Number(podgroup.id)==Number(id))
                            {
                                for (let group of this.grouppy) if (group.grouppa == groupName) {podgroup.grouppa = group;break}
                                podgroup.podgrouppa = newPodgroupName;
                                this.service.updatePodgrouppaPrichProstoia(podgroup)
                                .subscribe(data =>{
                                    this.httpClient.get<PodgrouppaPrichProstoia[]>(environment.UrlPodgrouppaPrichProstoia)
                                    .subscribe(result=>{
                                        this.podgrouppy = result;
                                        this.httpClient.get<PrichProstoia[]>(environment.UrlPrichProstoia)
                                        .subscribe(result=>{
                                            this.prichiny = result;
                                        })
                                        this.podgroupOpen = [];
                                        for (let podgroup of this.podgrouppy) this.podgroupOpen.push([false,"+"]);
                                    })
                                })
                                alert("Данные подгруппы изменены!");
                                break;
                            }
                    }
                });
            }
        }
        else alert("Проверьте заплнение полей!");
    }

    UpdatePrich(id:string, newPrichName:string, podgroupName:string, groupName:string){                                 //обновление данных причины
        if (newPrichName!="" && groupName!="")
        {
            let k=false;
            for (let prich of this.prichiny) if(String(prich.prichina) == newPrichName
            && String(prich.prichina)!=this.parametr[0]) {k=true;alert("Наименование занято, выберите другое!");break}
            if (k == false)
            {
                this.sure[0]=1;
                this.sure[2]="изменить";
                const promise = new Promise<void>((resolve) => {
                    const intervalId = setInterval(() => {
                        if (this.sure[0] == 0) {
                            clearInterval(intervalId);
                            resolve();
                        }
                    }, 100);
                });

                promise.then(() => {
                    if (this.sure[1]==1) {
                        for (let prich of this.prichiny)
                            if (Number(prich.id)==Number(id))
                            {
                                for (let group of this.grouppy) if (group.grouppa == groupName)
                                {
                                    prich.grouppa = group;
                                    if (podgroupName!="")
                                    {
                                        for (let podgroup of this.podgrouppy) if (podgroup.podgrouppa == podgroupName)
                                        {
                                            prich.podgrouppa = podgroup;
                                            break
                                        };
                                    }
                                    else prich.podgrouppa = null as any;
                                    break
                                }
                                prich.prichina = newPrichName;
                                this.service.updatePrichProstoia(prich)
                                .subscribe(data =>{
                                    this.httpClient.get<PrichProstoia[]>(environment.UrlPrichProstoia)
                                    .subscribe(result=>{
                                        this.prichiny = result;
                                    })
                                })
                                alert("Данные причины изменены!");
                                break;
                            }
                    }
                });
            }
        }
        else alert("Проверьте заплнение полей!");
    }

    CheckSearching(searching: string){                                                                                  //раскрывает список для демонстрации результатов поиска пользователю
        this.searching = searching.toLowerCase();
        if (searching != "") {
            for (let i = 0; i<this.groupOpen.length; i++) this.groupOpen[i][0] = true;
            for (let i = 0; i<this.groupOpen.length; i++) this.groupOpen[i][1] = "-";
            for (let i = 0; i<this.podgroupOpen.length; i++) this.podgroupOpen[i][0] = true;
            for (let i = 0; i<this.podgroupOpen.length; i++) this.podgroupOpen[i][1] = "-";
        }
        else {
            for (let i = 0; i<this.groupOpen.length; i++) this.groupOpen[i][0] = false;
            for (let i = 0; i<this.groupOpen.length; i++) this.groupOpen[i][1] = "+";
            for (let i = 0; i<this.podgroupOpen.length; i++) this.podgroupOpen[i][0] = false;
            for (let i = 0; i<this.podgroupOpen.length; i++) this.podgroupOpen[i][1] = "+";
        }
    }

    SearchGroup(group:Object){                                                                                          //поиск по группам
        let checkgr = String(Object.values(group)[1]).toLowerCase().indexOf(this.searching);
        let podgr=0;
        let pr=0;
        for (let podgroup of this.podgrouppy)
        {
            if(String(Object.values(Object.values(podgroup)[3])[1]) == String(Object.values(group)[1])
            && String(Object.values(podgroup)[1]).toLowerCase().indexOf(this.searching) >= 0) {podgr++; break}
        }
        for (let prich of this.prichiny)
        {
            let objGroup = String(Object.values(Object.values(prich)[4])[1]);
            if(objGroup == String(Object.values(group)[1])
            && String(prich.prichina).toLowerCase().indexOf(this.searching) >= 0) {pr++; break}
        }
        if (checkgr<0 && podgr==0 && pr==0)  return false
        else return true
    }

    SearchPodgroup(podgroup:Object){                                                                                    //поиск по подгруппам
        let checkpodgr = String(Object.values(podgroup)[1]).toLowerCase().indexOf(this.searching);
        let checkgr = String(Object.values(Object.values(podgroup)[3])[1]).toLowerCase().indexOf(this.searching);
        let pr = 0;
        for (let prich of this.prichiny)
        {
            if (Object.values(prich)[3]!=null) if(String(Object.values(podgroup)[1]) == String(Object.values(Object.values(prich)[3])[1])
            && String(prich.prichina).toLowerCase().indexOf(this.searching) >= 0) {pr++; break}
        }
        if (checkgr<0 && checkpodgr<0 && pr==0)  return false
        else return true
    }

    SearchPrich(prich:Object){                                                                                          //поиск причин
        let checkpodgr=-1;
        let objGroup = String(Object.values(Object.values(prich)[4])[1]);
        let checkprich = String(Object.values(prich)[1]).toLowerCase().indexOf(this.searching);
        if (Object.values(prich)[3]!=null) checkpodgr = String(Object.values(Object.values(prich)[3])[1]).toLowerCase().indexOf(this.searching);
        let checkgr = objGroup.toLowerCase().indexOf(this.searching);
        if (checkgr<0 && checkpodgr<0 && checkprich<0)  return false
        else return true
    }

    clearSearchInput(){                                                                                                 //сброс поиска
        this.searching = "";
        const inputForSearching = document.getElementById('inputForSearching') as HTMLInputElement;
        inputForSearching.value = "";
        for (let i = 0; i<this.groupOpen.length; i++) this.groupOpen[i][0] = false;
        for (let i = 0; i<this.groupOpen.length; i++) this.groupOpen[i][1] = "+";
        for (let i = 0; i<this.podgroupOpen.length; i++) this.podgroupOpen[i][0] = false;
        for (let i = 0; i<this.podgroupOpen.length; i++) this.podgroupOpen[i][1] = "+";
    }

    AreYouSure(n: number){                                                                                              //отслеживание команды пользователя (подтверждение)
        this.sure[1]=n;
        this.sure[0]=0;
    }
}
