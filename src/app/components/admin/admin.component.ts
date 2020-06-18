import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public testService:TestService) { }

  ngOnInit() {
  }

  showEnglishForm(){
    this.testService.englishForm=true;
    this.testService.logicalForm=false;
    this.testService.quantitiveForm=false;
    this.testService.essayForm=false;
    this.testService.automata=false;
  }

  showLogicalForm(){
    this.testService.englishForm=false;
    this.testService.logicalForm=true;
    this.testService.quantitiveForm=false;
    this.testService.essayForm=false;
    this.testService.automata=false;
  }

  showQuantitiveForm(){
    this.testService.englishForm=false;
    this.testService.logicalForm=false;
    this.testService.quantitiveForm=true;
    this.testService.essayForm=false;
    this.testService.automata=false;
  }

  showEssayForm(){
    this.testService.englishForm=false;
    this.testService.logicalForm=false;
    this.testService.quantitiveForm=false;
    this.testService.essayForm=true;
    this.testService.automata=false;
  }

  showAutomataForm(){
    this.testService.englishForm=false;
    this.testService.logicalForm=false;
    this.testService.quantitiveForm=false;
    this.testService.essayForm=false;
    this.testService.automata=true;
  }

}
