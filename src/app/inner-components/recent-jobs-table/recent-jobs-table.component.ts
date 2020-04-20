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

  statuses: string[] = ['created', 'running', 'success', 'fail'];
  displayedColumns: string[] = ['url', 'mime', 'created_at', 'status'];
  // displayedColumns: string[] = ['url', 'mime', 'created_at', 'updated_at', 'status'];
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
    this.dataService.getJobSummaryList().subscribe((summaryList: JobSummary[]) => {
      this.tableData = summaryList;

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.tableData.length; i++){
        if (this.tableData[i].last_scrape_status === 1){
          const duration = Date.now().valueOf() - new Date(this.tableData[i].created_at).valueOf();
          console.log('duration = ' + duration);
          if (duration > 3000){
            this.tableData[i].last_scrape_status = 3;
          }
        }
      }
    });
  }

  onRowClick(elem: JobSummary): void {
    this.router.navigate(['/job', elem.id]);
  }
}

