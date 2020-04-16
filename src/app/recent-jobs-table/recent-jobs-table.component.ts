import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {DataService} from '../data/data.service';
import {Observable} from 'rxjs';
import {JobSummary} from '../JobSummary';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-recent-jobs-table',
  templateUrl: './recent-jobs-table.component.html',
  styleUrls: ['./recent-jobs-table.component.scss']
})
export class RecentJobsTableComponent implements OnInit, OnChanges {

  @Output() mostRecentJobEmitter = new EventEmitter();
  jobSummaryList: JobSummary[];
  constructor(private dataService: DataService, public datepipe: DatePipe) {}

  displayedColumns: string[] = ['website', 'started_at', 'todo'];

  ngOnInit(): void {
    this.getLastJobSummary();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges ====');
    console.log(changes.jobSummaryList);
  }

  getLastJobSummary(): void {
    this.dataService.getJobSummaryList().subscribe((summaryList) => {
      this.jobSummaryList = summaryList;
    });
  }

  updateMostRecentJob(elem: JobSummary): void {
    this.mostRecentJobEmitter.emit(elem);
  }

  onRowClick(elem: JobSummary): void {
    console.log(123);
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
