import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-forms',
  templateUrl: './test-forms.component.html',
  styleUrls: ['./test-forms.component.css']
})
export class TestFormsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
  }

  
  admin(){
    this.router.navigate(['admin']);
  }

}
