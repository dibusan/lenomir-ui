import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearGaugeWrapperComponent } from './linear-gauge-wrapper.component';

describe('LinearGaugeWrapperComponent', () => {
  let component: LinearGaugeWrapperComponent;
  let fixture: ComponentFixture<LinearGaugeWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearGaugeWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearGaugeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
