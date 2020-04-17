import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../data/data.service';
import {JobRecord} from '../../interfaces/JobRecord';

@Component({
  selector: 'app-job-details-page',
  templateUrl: './job-details-page.component.html',
  styleUrls: ['./job-details-page.component.css']
})
export class JobDetailsPageComponent implements OnInit {

  fullJobRecord: JobRecord;
  recordStr: string;
  jobId: number;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobId = +params.id;
      this.dataService.getJobRecord(this.jobId).subscribe((job) => {
        this.fullJobRecord = job;
        this.recordStr = JSON.stringify(job);
      });
    });
  }
}
