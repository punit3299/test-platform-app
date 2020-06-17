import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDirectionComponent } from './test-direction.component';

describe('TestDirectionComponent', () => {
  let component: TestDirectionComponent;
  let fixture: ComponentFixture<TestDirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
