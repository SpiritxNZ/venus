import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcontenttwoComponent } from './blogcontenttwo.component';

describe('BlogcontenttwoComponent', () => {
  let component: BlogcontenttwoComponent;
  let fixture: ComponentFixture<BlogcontenttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogcontenttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogcontenttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
