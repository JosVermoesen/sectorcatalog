import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjstestingComponent } from './rxjstesting.component';

describe('RxjstestingComponent', () => {
  let component: RxjstestingComponent;
  let fixture: ComponentFixture<RxjstestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjstestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjstestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
