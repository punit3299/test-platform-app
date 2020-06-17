import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleDescriptionComponent } from './module-description.component';

describe('ModuleDescriptionComponent', () => {
  let component: ModuleDescriptionComponent;
  let fixture: ComponentFixture<ModuleDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
