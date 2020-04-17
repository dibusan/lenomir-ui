import {Injectable} from '@angular/core';
import {UrlSummary} from '../interfaces/UrlSummary';
import {Observable, of} from 'rxjs';
import {WebsitesSummary} from '../interfaces/WebsiteSummary';
import {JobSummary} from '../interfaces/JobSummary';
import {JobRecord} from '../interfaces/JobRecord';
import {
  JOB_SUMMARY_LIST, jobFullRecord1, jobFullRecord2, jobFullRecord3, LAST_JOB_SUMMARY, URL_SUMMARY, WEBSITES_SUMMARY
} from './constant';

@Injectable({
  providedIn: 'root',
})export class DataService {
  constructor() {
  }

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
    return of<JobSummary[]>(JOB_SUMMARY_LIST);
  }


  getJobRecord(jobId: number): Observable<JobRecord> {

    const JOB_RECORD_LIST: JobRecord[] = [
      jobFullRecord1,
      jobFullRecord2,
      jobFullRecord3,
    ];
    const res = JOB_RECORD_LIST.filter(fullJob => jobId === fullJob.summary.id);
    if (res.length > 0){
      return of<JobRecord>(res[0]);
    }
    throw new Error(`Job with id '${jobId}' does not exist`);
  }
  addURL(url) {
    URL_SUMMARY.analyzing += 1;
  }

}
