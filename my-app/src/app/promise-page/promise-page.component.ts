import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-promise-page',
  templateUrl: './promise-page.component.html',
  styleUrls: ['./promise-page.component.css']
})
export class PromisePageComponent {

  data: any;
  error: any;
  
  constructor(private apiService: ApiService)
  {

  }

  ngOnInit() {
    debugger;
    // Using the Promise-based API call
    this.apiService.getData().then(
      (response) => {
        debugger;
        this.data = response; // Handle success
      },
      (error) => {
        debugger;
        this.error = error; // Handle error
      }
    );

    console.log('data',this.data);
    console.log('error',this.error);

    this.apiService.getDataUsingObservable().subscribe(res=>
    {
      debugger;
      console.log(res);
    }
    );



    this.apiService.getDataUsingPromise().then(
      (response) => {
        debugger;
        this.data = response; // Handle success
      },
      (error) => {
        debugger;
        this.error = error; // Handle error
      }
    );




  }

  fillIsilonNotification()
  {
    this.apiService.getManagementNotification().pipe().subscribe(data => {
      if (data.Data != null || data.Data != undefined) {
        if (data.Data.length < 1) {

          return;
        }
  
      }
    },
      error => {
        console.log(error);
        alert('error occured');
      });
  }

}
