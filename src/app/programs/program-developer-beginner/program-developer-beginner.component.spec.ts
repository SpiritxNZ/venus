import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramDeveloperBeginnerComponent } from './program-developer-beginner.component';

describe('ProgramDeveloperBeginnerComponent', () => {
  let component: ProgramDeveloperBeginnerComponent;
  let fixture: ComponentFixture<ProgramDeveloperBeginnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramDeveloperBeginnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramDeveloperBeginnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
