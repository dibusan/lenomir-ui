import {Injectable} from '@angular/core';
import {UrlSummary} from '../interfaces/UrlSummary';
import {Observable, of} from 'rxjs';
import {WebsitesSummary} from '../interfaces/WebsiteSummary';
import {JobSummary} from '../interfaces/JobSummary';
import {JobRecord} from '../interfaces/JobRecord';
import {
  jobFullRecord1,
  jobFullRecord2,
  jobFullRecord3,
  jobSummary1,
  jobSummary2, jobSummary3,
  LAST_JOB_SUMMARY,
  URL_SUMMARY,
  WEBSITES_SUMMARY
} from './constant';

@Injectable({
  providedIn: 'root',
})export class DataService {
  constructor() {
  }

  JOB_RECORD_LIST: JobRecord[] = [
    jobFullRecord1,
    jobFullRecord2,
    jobFullRecord3,
  ];
  JOB_SUMMARY_LIST: JobSummary[] = [
    jobSummary1,
    jobSummary2,
    jobSummary3
  ];

  getUrlSummary(): Observable<UrlSummary> {
    return of<UrlSummary>(URL_SUMMARY);
  }

  getWebsitesSummary(): Observable<WebsitesSummary> {
    return of<WebsitesSummary>(WEBSITES_SUMMARY);
  }

  getLastJobSummary(): Observable<JobSummary> {
    return of<JobSummary>(LAST_JOB_SUMMARY);
  }

  getJobSummaryList(): Observable<JobSummary[]> {
    return of<JobSummary[]>(this.JOB_SUMMARY_LIST);
  }


  getJobRecord(jobId: number): Observable<JobRecord> {
    const res = this.JOB_RECORD_LIST.filter(fullJob => jobId === fullJob.summary.id);
    if (res.length > 0){
      return of<JobRecord>(res[0]);
    }
    throw new Error(`Job with id '${jobId}' does not exist`);
  }

  startNewJob(url){
    const jobFullRecord: JobRecord = {
      summary: {
        id: Math.random() * 100000,
        finished_at: new Date(Date.now()),
        started_at: new Date(Date.now()),
        failure: 0,
        success: 1,
        todo: 0,
        website: url,
      },
      urls: [
        {
          url,
          extractedData: [
            {
              silly_object: 1,
              silly_objectB: 1,
              silly_objectC: 1,
              silly_objectD: 1,
            }
          ]
        }
      ]
    };
    this.JOB_RECORD_LIST.push(jobFullRecord);
    const jobSummary: JobSummary = jobFullRecord.summary;
    this.JOB_SUMMARY_LIST.push(jobSummary);
    console.log('New Job');
    console.log(this.JOB_SUMMARY_LIST);
  }

  addURL(url) {
    URL_SUMMARY.analyzing += 1;
  }

}
