import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent {

asyncNameEmit=new AsyncSubject();

asyncNameData:any;
constructor(){}

ngOnInit()
{
  this.asyncNameEmit.subscribe(res=>{
    this.asyncNameData=res;
  });
}

  addName(name:any)
  {
    debugger;
    console.log(name);
    this.asyncNameEmit.next(name);
  }

  completeSubscription()
  {
    this.asyncNameEmit.complete();
  }
}
