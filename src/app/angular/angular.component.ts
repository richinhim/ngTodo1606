import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AngularComponent implements OnInit {
  todo;
  constructor() { }

  ngOnInit() {
  }

  add_todo() {
    console.log('click');
  }
}
