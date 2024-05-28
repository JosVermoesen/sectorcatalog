import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyBarChartComponent } from './my-bar-chart.component';

describe('MyBarChartComponent', () => {
  let component: MyBarChartComponent;
  let fixture: ComponentFixture<MyBarChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
