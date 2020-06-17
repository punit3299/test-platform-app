import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  instructions:boolean=true;
  createTest:boolean;
  testDirection:boolean;
  modules:boolean;
  moduleDescription:boolean;
  mcq:boolean;
  comprehension:boolean;
  essay:boolean;
  automata:boolean;
  moduleCompleted:boolean;
  resultCharts:boolean;

  constructor() { }
}
