import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyPieChartComponent } from './my-pie-chart.component';

describe('MyPieChartComponent', () => {
  let component: MyPieChartComponent;
  let fixture: ComponentFixture<MyPieChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
