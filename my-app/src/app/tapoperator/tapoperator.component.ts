import { Component } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { DesignUtilityService } from '../appService/design-utility.service';

@Component({
  selector: 'app-tapoperator',
  templateUrl: './tapoperator.component.html',
  styleUrls: ['./tapoperator.component.css']
})
export class TapoperatorComponent {

  constructor(private _du:DesignUtilityService)
  {

  }

  myColor:string='';

  ngOnInit()
  {
    const source= interval(1000);
    const Arr=['anup','bikash','deependra','golu','kishan','mukesh','shyam'];

    // source.pipe(map(item=>'number '+item)).subscribe(res=>{
    //   console.log(res);
    // });


    // ex 01
    let obsSubscription:Subscription;

    obsSubscription=source.pipe(
      tap(res=>{
        if(res>Arr.length-1)
        {
          obsSubscription.unsubscribe();
        }
      }),
      map(item=>Arr[item])
    )
      .subscribe(res=>{
      console.log(res);
      this._du.print(res,'elContainer')
    });


    // ex 02
    const colours=['red','yellow','green','pink','blue','megenta','skyblue'];
    let obsSubscription2:Subscription;

    obsSubscription2=source.pipe(
      tap(res=>{
        this.myColor=colours[res];
        if(res>colours.length-1)
        {
          obsSubscription2.unsubscribe();
        }
      }),
      map(item=>colours[item])
    )
      .subscribe(res=>{
      console.log(res);
      this._du.print(res,'elContainer2')
    });
  }
}
