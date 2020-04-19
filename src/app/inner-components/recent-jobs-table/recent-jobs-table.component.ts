import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {DataService} from '../../data/data.service';
import {Observable, Subscription} from 'rxjs';
import {JobSummary} from '../../interfaces/JobSummary';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-recent-jobs-table',
  templateUrl: './recent-jobs-table.component.html',
  styleUrls: ['./recent-jobs-table.component.scss']
})
export class RecentJobsTableComponent implements OnInit {

  table: MatTable<any>;
  tableData: JobSummary[];
  /*  export interface JobSummary {
        id: number;
        url: string;
        mime: string;
        started_at: Date;
        finished_at: Date;
        status: number;
      } */

  displayedColumns: string[] = ['url', 'mime', 'started_at', 'finished_at', 'status'];
  constructor(
    private router: Router,
    public dataService: DataService,
    public datepipe: DatePipe,
  ) {}

  ngOnInit(): void {
    this.loadTableData();
    // this.table.renderRows();
    // setInterval(() => {
    // }, 1000);
  }

  loadTableData() {
    this.dataService.getJobSummaryList().subscribe((data: JobSummary[]) => {
      this.tableData = data;
    });
  }

  onRowClick(elem: JobSummary): void {
    this.router.navigate(['/job', elem.id]);
  }
}

