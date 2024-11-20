import { Component } from '@angular/core';
import { from } from 'rxjs';
import { PagingConfig } from '../_models/paging-config.model';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent {

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

  data:any=[];
  
  psize=5;
  currentp=1;

  currentPage:number  = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  pagingConfig: PagingConfig = {} as PagingConfig;
  constructor()
  {
    this.data=this.datArr; 
    this.pagingConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }
  }

  getCustomers(){
    //const source=from(this.datArr);
    this.data=this.datArr; 
    this.pagingConfig.totalItems = this.data.length;
  }

  onTableDataChange(event:any){
    this.pagingConfig.currentPage  = event;
    this.getCustomers();
  }

  ngOnInit():void
  {
    this.data=this.datArr; 
  }

  search(event:any)
  { 
      console.log('event',event.target.value);

      //this.datArr = this.datArr.filter(p => p.name.includes(event.target.value));
      this.data = this.datArr.filter(e=>e.name.startsWith(event.target.value));
      console.log('event',event.target.value);

  }

}
