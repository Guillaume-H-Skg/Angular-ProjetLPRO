import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'StonkEshop';
  time: number = 0;



  ngOnInit(): void {
    const counter = interval(1000);
    counter.subscribe(
      (value) => {
        this.time = value;
      },
      (error) => {
        console.log("Error : " + error);
      },
      () => {
        console.log('Observable complete');
      }
    );
  }




}
