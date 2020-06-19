import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  testForm: FormGroup;
  submitted: boolean = false;
  securityQuestion = [
    "What is your name? ",
    "What is your pet name? ",
    "Where is your birthplace? "
  ]

  constructor(private formBuilder: FormBuilder, private router: Router, private testService: TestService) { }

  ngOnInit() {
    this.testForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern("[A-Z][a-z]{2,14}")]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("[6-9]{1}[0-9]{9}")]],
      securityQuestion: ['', Validators.required],
      answer: ['', [Validators.required]]
    });
  }

  submitTestForm() {
    this.submitted = true;
    if (this.testForm.invalid)
      return;

      this.testService.instructions = false;
      this.testService.createTest = false;
      this.testService.testDirection = true;
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
