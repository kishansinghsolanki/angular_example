import { Component } from '@angular/core';
import { from, interval, map } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  sub1:any;
  datArr=[
    {id:1,name:'Anup',gender:'Male',salary:2000,age:10},
    {id:2,name:'Dev',gender:'Male',salary:3000,age:11},
    {id:3,name:'Shiksha',gender:'Female',salary:4000,age:12},
    {id:4,name:'Siya',gender:'Female',salary:5000,age:13},
    {id:5,name:'Gori',gender:'Female',salary:6000,age:14},
    {id:6,name:'Golu',gender:'Male',salary:7000,age:15},
    {id:7,name:'Mukesh',gender:'Male',salary:8000,age:16},
    {id:8,name:'Bhupendra',gender:'Male',salary:9000,age:17},
    {id:9,name:'Pratibh',gender:'Female',salary:10000,age:18},
    {id:10,name:'Kanchan',gender:'Female',salary:11000,age:19},
    {id:11,name:'Kaliya',gender:'Male',salary:12000,age:20},
    {id:12,name:'Kishan',gender:'Male',salary:13000,age:21},
    {id:13,name:'Deependra',gender:'Male',salary:14000,age:22},
    {id:14,name:'Ruchi',gender:'Female',salary:15000,age:23},
    {id:15,name:'Shyam',gender:'Male',salary:16000,age:24},
  ];
  constructor()
  {
    
  }

  ngOnInit()
  {
    const brodcastvedio=interval(1000);

    // brodcastvedio.subscribe(item=>{
    //   console.log("vedio "+item);
    // });

    // this.sub1= brodcastvedio.subscribe(item=>{
    //   console.log("vedio "+item);
    // });

    this.sub1= brodcastvedio.pipe(map(data=>console.log('mapData =>',data)))
    .subscribe(item=>{
      console.log("vedio "+item);
    });

    setTimeout(()=>
    {
      this.sub1.unsubscribe();
    },10000)

    const source=from(this.datArr);


    source.pipe(map(member=>member.salary + " item"))
    .subscribe(item=>{
      console.log(item);
    });
  }
}
