import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramDataanalystComponent } from './program-dataanalyst.component';

describe('ProgramDataanalystComponent', () => {
  let component: ProgramDataanalystComponent;
  let fixture: ComponentFixture<ProgramDataanalystComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramDataanalystComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramDataanalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
