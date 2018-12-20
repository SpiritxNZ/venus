import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramTesterComponent } from './program-tester.component';

describe('ProgramTesterComponent', () => {
  let component: ProgramTesterComponent;
  let fixture: ComponentFixture<ProgramTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
