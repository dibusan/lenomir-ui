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
} from './constant';
import {HttpClient} from '@angular/common/http';
import {Url} from 'url';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})export class DataService {
  constructor(private http: HttpClient) {
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
    const url = 'https://lenomir-core-dot-lenomir.appspot.com/pages/summary';
    return this.http.get<UrlSummary>(url);
  }

  getWebsitesSummary(): Observable<WebsitesSummary> {
    const url = 'https://lenomir-core-dot-lenomir.appspot.com/websites/count';
    return this.http.get<WebsitesSummary>(url);
  }

  getLastJobSummary(): Observable<JobSummary> {
    return of<JobSummary>(LAST_JOB_SUMMARY);
  }

  getJobSummaryList(): Observable<JobSummary[]> {
    const apiUrl = 'https://lenomir-core-dot-lenomir.appspot.com/pages/recent';
    const test: any[] = [
      {
        a: 1,
        b: 2
      }
    ];
    of(test).pipe(
      map(summary => {
        
      })
    );
    return of<JobSummary[]>(this.JOB_SUMMARY_LIST);
    // return this.http.get<JobSummary[]>(apiUrl);
  }


  getJobRecord(jobId: number): Observable<JobRecord> {
    const res = this.JOB_RECORD_LIST.filter(fullJob => jobId === fullJob.summary.id);
    if (res.length > 0){
      return of<JobRecord>(res[0]);
    }
    throw new Error(`Job with id '${jobId}' does not exist`);
  }

  startNewJob(newEndpoint){
    const apiUrl = 'https://lenomir-core-dot-lenomir.appspot.com/mine';
    const body = {
      ids: [],
      urls: [newEndpoint]
    };

    this.http.post(apiUrl, body).subscribe((data) => {
      // tslint:disable-next-line:no-debugger
      debugger;
    }, (err) => {
      // tslint:disable-next-line:no-debugger
      debugger;
    });
  }

  addURL(url) {
    // URL_SUMMARY.analyzing += 1;
  }

}
