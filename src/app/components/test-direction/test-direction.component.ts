import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test-direction',
  templateUrl: './test-direction.component.html',
  styleUrls: ['./test-direction.component.css']
})
export class TestDirectionComponent implements OnInit {

  constructor(private testService:TestService) { }

  ngOnInit() {
  }

  checkTestDirections(){
    this.testService.instructions = false;
    this.testService.createTest = false;
    this.testService.testDirection = false;
    this.testService.modules = true;
    this.testService.moduleDescription = false;
    this.testService.mcq = false;
    this.testService.comprehension=false;
    this.testService.essay = false;
    this.testService.automata = false;
    this.testService.moduleCompleted = false;
  }

}
