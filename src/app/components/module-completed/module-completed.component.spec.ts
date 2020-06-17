import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleCompletedComponent } from './module-completed.component';

describe('ModuleCompletedComponent', () => {
  let component: ModuleCompletedComponent;
  let fixture: ComponentFixture<ModuleCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
