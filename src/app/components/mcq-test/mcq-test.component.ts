import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-mcq-test',
  templateUrl: './mcq-test.component.html',
  styleUrls: ['./mcq-test.component.css']
})
export class McqTestComponent implements OnInit {

  constructor(private testService:TestService) { }

  countDown: Subscription;
  counter = 600;
  tick = 1000;
  ngOnInit() {
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
  }
  ngOnDestroy() {
    this.countDown = null;
  }

  mcqComplete(){
    this.testService.instructions = false;
    this.testService.createTest = false;
    this.testService.testDirection = false;
    this.testService.modules = false;
    this.testService.moduleDescription = false;
    this.testService.mcq = false;
    this.testService.comprehension=true;
    this.testService.essay = false;
    this.testService.automata = false;
    this.testService.moduleCompleted = false;
  }

}
