import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesscasesComponent } from './success-cases.component';

describe('SuccesscasesComponent', () => {
  let component: SuccesscasesComponent;
  let fixture: ComponentFixture<SuccesscasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesscasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesscasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
