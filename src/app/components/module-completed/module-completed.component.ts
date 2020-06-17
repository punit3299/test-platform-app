import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-module-completed',
  templateUrl: './module-completed.component.html',
  styleUrls: ['./module-completed.component.css']
})
export class ModuleCompletedComponent implements OnInit {

  constructor(private testService: TestService) { }

  countDown: Subscription;
  counter = 60;
  tick = 1000;
  ngOnInit() {
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
  }
  ngOnDestroy() {
    this.countDown = null;
  }

  showResults() {
    this.testService.instructions = false;
    this.testService.createTest = false;
    this.testService.testDirection = false;
    this.testService.modules = false;
    this.testService.moduleDescription = false;
    this.testService.mcq = false;
    this.testService.comprehension = false;
    this.testService.essay = false;
    this.testService.automata = false;
    this.testService.moduleCompleted = false;
    this.testService.resultCharts = true;
  }

}
