import {Injectable} from '@angular/core';
import {UrlSummary} from '../../interfaces/UrlSummary';
import {Observable, of} from 'rxjs';
import {WebsitesSummary} from '../../interfaces/WebsiteSummary';
import {JobSummary} from '../../interfaces/JobSummary';
import {JobRecord} from '../../interfaces/JobRecord';
import {
  LAST_JOB_SUMMARY,
} from './constant';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root',
})export class DataService {
  constructor(private http: HttpClient, private userService: UserService) {
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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: this.userService.token
      })
    };
    this.http.post(apiUrl, body, httpOptions).subscribe((data) => {
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
