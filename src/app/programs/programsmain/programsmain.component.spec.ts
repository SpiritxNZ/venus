import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsmainComponent } from './programsmain.component';

describe('ProgramsmainComponent', () => {
  let component: ProgramsmainComponent;
  let fixture: ComponentFixture<ProgramsmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
