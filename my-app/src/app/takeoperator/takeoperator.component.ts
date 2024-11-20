import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer, toArray } from 'rxjs';

@Component({
  selector: 'app-takeoperator',
  templateUrl: './takeoperator.component.html',
  styleUrls: ['./takeoperator.component.css']
})
export class TakeoperatorComponent implements OnInit{


  sourcedata=interval(1000).pipe(take(4));

  rendomName=['amit','siya','kiran','shyam','dev','sharma','mukesh','golu','kanchan'];
data:any;
data1:any;
data2:any;
  constructor(){}

  ngOnInit(): void {
    // this.sourcedata.pipe(take(3)).subscribe(res=>
    // {
    //   console.log(res);
    // }
    // )

    // this.sourcedata.subscribe(res=>
    //   {
    //     console.log(res);
    //   }
    //   )

    // take 5
      const source=from(this.rendomName);

      source.pipe(take(5),toArray()).subscribe(res=>
      {
        console.log(res);
        this.data=res;
      });

// take last 5
      source.pipe(takeLast(5),toArray()).subscribe(res=>
        {
          console.log(res);
          this.data1=res;
        });

        // take until
        const source1=interval(1000);
        const condition=timer(10000);
        let condition1=fromEvent(document,'click');
        // source1.pipe(takeUntil(condition)).subscribe(res=>
        //   {
        //     console.log(res);
        //     //this.data2=res;
        //   }
        //   );

          source1.pipe(takeUntil(condition1)).subscribe(res=>
            {
              console.log(res);
              //this.data2=res;
            } );

  }  
}