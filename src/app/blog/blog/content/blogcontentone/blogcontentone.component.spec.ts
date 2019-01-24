import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcontentoneComponent } from './blogcontentone.component';

describe('BlogcontentoneComponent', () => {
  let component: BlogcontentoneComponent;
  let fixture: ComponentFixture<BlogcontentoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogcontentoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogcontentoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
