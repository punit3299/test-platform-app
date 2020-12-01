import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  items = [];
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 21; i++) {
      this.items.push(i + 1);
    }
  }

}
