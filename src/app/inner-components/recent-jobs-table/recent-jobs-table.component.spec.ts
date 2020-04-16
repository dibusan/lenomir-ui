import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentJobsTableComponent } from './recent-jobs-table.component';

describe('RecentJobsTableComponent', () => {
  let component: RecentJobsTableComponent;
  let fixture: ComponentFixture<RecentJobsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentJobsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentJobsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
