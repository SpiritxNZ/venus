import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseshomeComponent } from './courses-home.component';

describe('CourseshomeComponent', () => {
  let component: CourseshomeComponent;
  let fixture: ComponentFixture<CourseshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
