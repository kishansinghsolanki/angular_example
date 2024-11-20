import { Component, OnInit } from '@angular/core';
import { filter, from, map, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {


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

  data:any;
  data1:any;
  data2:any;
  constructor()
  {}

  ngOnInit():void
  {
    const source=from(this.datArr);

 // source.subscribe(res=>
    // {
    //   console.log(res);
    // }
    // )

    // first type
   source.pipe(filter(member=>member.name.length<4),toArray()).subscribe(res=>
    {
      console.log(res);
      this.data=res;
    })

    // second type
   source.pipe(filter(member=>member.gender=='Female'),toArray()).subscribe(res=>
    {
      console.log(res);
      this.data1=res;
    })

    // third type
   source.pipe(filter(member=>member.salary>10000),toArray()).subscribe(res=>
    {
      console.log(res);
      this.data2=res;
    })
  }
}
