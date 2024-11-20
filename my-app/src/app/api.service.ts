import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  // Using Promise to make API call
  getData(): Promise<any> {
    debugger;
    return new Promise((resolve, reject) => {
      this.http.get('https://freeapi.miniprojectideas.com/api/Annadata/GetAdminDasboardData')
        .subscribe({
          next: (data) => {
            resolve(data); // Resolve the Promise with the response
          },
          error: (error) => {
            reject(error); // Reject the Promise if there's an error
          }
        });
    });
  }

  getDataUsingObservable(): Observable<any> {
    debugger;
    return this.http.get<any>('https://freeapi.miniprojectideas.com/api/Annadata/GetAdminDasboardData');
}

getDataUsingPromise(): Promise<any> {
  debugger;
  return new Promise((resolve, reject) => {
    this.http.get<any>('https://freeapi.miniprojectideas.com/api/Annadata/GetAdminDasboardData');
  });
}


getManagementNotification() {
  return this.http.get<any>('https://freeapi.miniprojectideas.com/api/Annadata/GetAdminDasboardData');
}
}
