import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/do';
// interface ItemsResponse {
//   items: any;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  items: any;

  showLoader: boolean = true;

  constructor(private http: HttpClient){}

  callStopLoader(): void {
    setTimeout(() => {
      this.showLoader = false;
    },5000)
  }

  ngOnInit(): void {
    
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        this.items = data;
        console.log(this.items[0].title);
        this.callStopLoader();      
      }, (err: HttpErrorResponse) => {
        console.log("Some error");
      })

    

    // const req = this.http.post('https://jsonplaceholder.typicode.com/posts', {
    //       title: 'hello from rai',
    //       userId: 1,
    //       country: 'Malaysia'
    //     }).subscribe((res: HttpResponse<any>) => {
    //       console.log(res);
    //       this.showLoader = false;
    //     }, err => {
    //       console.log("Error");
    //     })
    }
}
