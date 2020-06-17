import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  constructor(private testService:TestService) { }

  ngOnInit() {
  }

  checkModules(){
    this.testService.instructions = false;
    this.testService.createTest = false;
    this.testService.testDirection = false;
    this.testService.modules = false;
    this.testService.moduleDescription = true;
    this.testService.mcq = false;
    this.testService.comprehension=false;
    this.testService.essay = false;
    this.testService.automata = false;
    this.testService.moduleCompleted = false;
  }

}
