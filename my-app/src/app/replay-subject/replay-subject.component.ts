import { Component } from '@angular/core';
import { ReplaySubject, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent {
  //nameEmit=new ReplaySubject<string>(5,5000);
  // 5 means  last 5 no of record show when we subscribe  // 5000 means 5 second inside any record emit then show when we subscribe
  nameEmit=new ReplaySubject<string>(5,5000);

  constructor(){}

  user1List=[
    'Angular 1','Angular 2','Angular 3'
  ];
  user2List:any=[];
  user3List:any=[];

  subscribeMode2:boolean=false;
  subscribeMode3:boolean=false;

  subscription2:Subscription | undefined;
  subscription3:Subscription | undefined;

  ngOnInit()
  {
    this.nameEmit.subscribe(res=>{
      console.log(res);
      this.user1List.push(res);
    });
  }

  addName(value:any)
  {
    //console.log(value);
    this.nameEmit.next(value);
  }

  user2Subscribe()
  {
    if(this.subscribeMode2)
    {
      this.subscription2?.unsubscribe();
    }
    else{
      this.subscription2=this.nameEmit.subscribe(res=>{
        this.user2List.push(res);
      });
    }
    
    this.subscribeMode2 =!this.subscribeMode2;
  }

  user3Subscribe()
  {
    if(this.subscribeMode3)
    {
      this.subscription3?.unsubscribe();
    }
    else
    {
      this.subscription3=this.nameEmit.subscribe(res=>{
        this.user3List.push(res);
      });
    }
    
    this.subscribeMode3 =!this.subscribeMode3;
  }
}
