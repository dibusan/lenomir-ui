import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../data/data.service';
import {JobRecord} from '../../interfaces/JobRecord';

@Component({
  selector: 'app-job-details-page',
  templateUrl: './job-details-page.component.html',
  styleUrls: ['./job-details-page.component.scss']
})
export class JobDetailsPageComponent implements OnInit {

  fullJobRecord: JobRecord;
  extractedData: any[];
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
        this.extractedData = job.urls[0].extractedData
        this.recordStr = JSON.stringify(job);
      });
    });
  }
}
