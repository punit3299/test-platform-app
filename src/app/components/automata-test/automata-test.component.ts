import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-automata-test',
  templateUrl: './automata-test.component.html',
  styleUrls: ['./automata-test.component.css']
})
export class AutomataTestComponent implements OnInit {

  constructor(private testService:TestService) { }

  countDown: Subscription;
  counter = 3600;
  tick = 1000;
  ngOnInit() {
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
  }
  ngOnDestroy() {
    this.countDown = null;
  }
 
  submitAutomata(){
    this.testService.instructions = false;
    this.testService.createTest = false;
    this.testService.testDirection = false;
    this.testService.modules = false;
    this.testService.moduleDescription = false;
    this.testService.mcq = false;
    this.testService.comprehension=false;
    this.testService.essay = false;
    this.testService.automata = false;
    this.testService.moduleCompleted = true;
  }

}
