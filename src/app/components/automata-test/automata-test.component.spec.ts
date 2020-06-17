import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomataTestComponent } from './automata-test.component';

describe('AutomataTestComponent', () => {
  let component: AutomataTestComponent;
  let fixture: ComponentFixture<AutomataTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomataTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomataTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
