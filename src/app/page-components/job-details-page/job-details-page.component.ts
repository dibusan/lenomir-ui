import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data/data.service';
import {ExtractedDataSummary, JobRecord} from '../../interfaces/JobRecord';

@Component({
  selector: 'app-job-details-page',
  templateUrl: './job-details-page.component.html',
  styleUrls: ['./job-details-page.component.scss']
})
export class JobDetailsPageComponent implements OnInit {
  statuses: string[] = ['created', 'running', 'success', 'fail'];
  fullJobRecord: JobRecord;
  jobId: number;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobId = +params.id;
      this.dataService.getJobDetails(this.jobId).subscribe((details: JobRecord) => {
        this.fullJobRecord = details;

        let xhrCount = 0;
        let tableCount = 0;
        let embeddedCount = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.fullJobRecord.extracted_data.length; i++){
          switch (this.fullJobRecord.extracted_data[i].type) {
            case 'xhr':
              xhrCount += 1;
              break;
            case 'embedded_json':
              embeddedCount += 1;
              break;
            case 'html_table':
              tableCount += 1;
              break;
          }

          this.fullJobRecord.extracted_data[i].content =
            JSON.parse(this.fullJobRecord.extracted_data[i].content);
        }
        this.fullJobRecord.extracted_data_summary = {
          embedded_json: embeddedCount,
          html_table: tableCount,
          xhr: xhrCount
        };
        if (this.fullJobRecord.extracted_data.length === 0){
          this.fullJobRecord.status = 3;
        }else if (
          this.fullJobRecord.status === 1 &&
          this.fullJobRecord.extracted_data.length > 0){
            this.fullJobRecord.status = 2;
        }else if (this.fullJobRecord.status === 1){
          const duration = Date.now().valueOf() - new Date(this.fullJobRecord.last_scrape_date).valueOf();
          this.fullJobRecord.duration = duration;
        }

      });
    });
  }
}
