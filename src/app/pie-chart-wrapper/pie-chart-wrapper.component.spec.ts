import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartWrapperComponent } from './pie-chart-wrapper.component';

describe('PieChartWrapperComponent', () => {
  let component: PieChartWrapperComponent;
  let fixture: ComponentFixture<PieChartWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieChartWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
