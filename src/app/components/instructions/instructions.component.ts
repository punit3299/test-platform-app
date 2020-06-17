import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  flag:boolean;

  constructor(private testService:TestService) { }

  ngOnInit() {
  }

  agree(){
    this.flag=true;
  }
  disagree(){
    this.flag=false;
  }

  termsAgreed(){
    this.testService.instructions = false;
    this.testService.createTest = true;
    this.testService.testDirection = false;
    this.testService.modules = false;
    this.testService.moduleDescription = false;
    this.testService.mcq = false;
    this.testService.comprehension=false;
    this.testService.essay = false;
    this.testService.automata = false;
    this.testService.moduleCompleted = false;
    this.testService.resultCharts=false;
  }

}
