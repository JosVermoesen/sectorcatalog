import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UnsplashComponent } from './unsplash.component';

describe('UnsplashComponent', () => {
  let component: UnsplashComponent;
  let fixture: ComponentFixture<UnsplashComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsplashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
