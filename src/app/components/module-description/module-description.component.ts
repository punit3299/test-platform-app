import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-module-description',
  templateUrl: './module-description.component.html',
  styleUrls: ['./module-description.component.css']
})
export class ModuleDescriptionComponent implements OnInit {

  constructor(private testService:TestService) { }

  countDown: Subscription;
  counter = 60;
  tick = 1000;
  ngOnInit() {
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
  }
  ngOnDestroy() {
    this.countDown = null;
  }

  checkModuleDescription(){
    this.testService.instructions = false;
    this.testService.createTest = false;
    this.testService.testDirection = false;
    this.testService.modules = false;
    this.testService.moduleDescription = false;
    this.testService.mcq = true;
    this.testService.comprehension=false;
    this.testService.essay = false;
    this.testService.automata = false;
    this.testService.moduleCompleted = false;
    this.testService.resultCharts=false;
  }

}
