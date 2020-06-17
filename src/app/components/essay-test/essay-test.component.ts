import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-essay-test',
  templateUrl: './essay-test.component.html',
  styleUrls: ['./essay-test.component.css']
})
export class EssayTestComponent implements OnInit {

  essay: string;
  constructor(private testService: TestService) { }

  countDown: Subscription;
  counter = 1800;
  tick = 1000;
  ngOnInit() {
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
  }
  ngOnDestroy() {
    this.countDown = null;
  }

  essayComplete() {
    this.testService.instructions = false;
    this.testService.createTest = false;
    this.testService.testDirection = false;
    this.testService.modules = false;
    this.testService.moduleDescription = false;
    this.testService.mcq = false;
    this.testService.comprehension=false;
    this.testService.essay = false;
    this.testService.automata = true;
    this.testService.moduleCompleted = false;
    this.testService.resultCharts=false;
  }

}
