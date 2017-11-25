import { Component } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public  router: Router) {
    this.router.events.subscribe( event => {
      this.router.events.subscribe(events => {
        console.log(events);
// 부모, 자식 경로가 호출될때마다 여러가지 이벤트 발생. NavigationStart -> NavigationReconized -> NavigationEnd
        if (events instanceof NavigationStart) {
            window.scrollTo(0, 0);
        }
      });
    });
  }
}
