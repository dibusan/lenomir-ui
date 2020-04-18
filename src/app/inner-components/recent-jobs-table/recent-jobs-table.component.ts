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

  @Output() mostRecentJobEmitter = new EventEmitter();
  @ViewChild(MatTable) table: MatTable<any>;
  displayedColumns: string[] = ['website', 'started_at', 'todo'];
  constructor(
    private router: Router,
    public dataService: DataService,
    public datepipe: DatePipe,
  ) {}

  ngOnInit(): void {
    setInterval(() => {
      this.table.renderRows();
    }, 1000);
  }

  updateMostRecentJob(elem: JobSummary): void {
    this.mostRecentJobEmitter.emit(elem);
  }

  onRowClick(elem: JobSummary): void {
    this.router.navigate(['/job', elem.id]);
  }
}

