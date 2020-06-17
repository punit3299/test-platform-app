import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-module-completed',
  templateUrl: './module-completed.component.html',
  styleUrls: ['./module-completed.component.css']
})
export class ModuleCompletedComponent implements OnInit {

  constructor() { }

  countDown: Subscription;
  counter = 60;
  tick = 1000;
  ngOnInit() {
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
  }
  ngOnDestroy() {
    this.countDown = null;
  }

}
