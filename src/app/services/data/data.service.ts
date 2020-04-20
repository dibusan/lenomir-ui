import {Injectable} from '@angular/core';
import {UrlSummary} from '../../interfaces/UrlSummary';
import {Observable, of} from 'rxjs';
import {WebsitesSummary} from '../../interfaces/WebsiteSummary';
import {JobSummary} from '../../interfaces/JobSummary';
import {JobRecord} from '../../interfaces/JobRecord';
import {
  LAST_JOB_SUMMARY,
} from './constant';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})export class DataService {
  constructor(private http: HttpClient) {
  }

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
    // return of<JobSummary[]>(this.JOB_SUMMARY_LIST);
    return this.http.get<JobSummary[]>(apiUrl);
  }

  getJobDetails(jobId: number): Observable<JobRecord> {
    const apiUrl = `https://lenomir-core-dot-lenomir.appspot.com/${jobId}/details`;
    return this.http.get<JobRecord>(apiUrl);
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
