import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogContentThreeComponent } from './blog-content-three.component';

describe('BlogContentThreeComponent', () => {
  let component: BlogContentThreeComponent;
  let fixture: ComponentFixture<BlogContentThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogContentThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogContentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
