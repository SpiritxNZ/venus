import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramDeveloperComponent } from './program-developer.component';

describe('ProgramDeveloperComponent', () => {
  let component: ProgramDeveloperComponent;
  let fixture: ComponentFixture<ProgramDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
