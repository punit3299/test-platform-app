import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public testService:TestService) { }

  // instructions:boolean=this.testService.instructions;
  // createTest:boolean=this.testService.createTest;
  // testDirection:boolean=this.testService.testDirection;
  // modules:boolean=this.testService.modules;
  // moduleDescription:boolean=this.testService.moduleDescription;
  // mcq:boolean=this.testService.mcq;
  // comprehension:boolean=this.testService.comprehension;
  // essay:boolean=this.testService.essay;
  // automata:boolean=this.testService.automata;
  // moduleCompleted:boolean=this.testService.moduleCompleted;

  ngOnInit() {
    
  }

}
