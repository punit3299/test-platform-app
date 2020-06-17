import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssayTestComponent } from './essay-test.component';

describe('EssayTestComponent', () => {
  let component: EssayTestComponent;
  let fixture: ComponentFixture<EssayTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssayTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssayTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
