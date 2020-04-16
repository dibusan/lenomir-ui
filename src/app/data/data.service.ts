import { Injectable } from '@angular/core';
import {UrlSummary} from '../UrlSummary';
import {Observable, of} from 'rxjs';
import {WebsitesSummary} from '../WebsiteSummary';
import {JobSummary} from '../JobSummary';

@Injectable({
  providedIn: 'root',
})export class DataService {

  WEBSITES_SUMMARY: WebsitesSummary = {
    total: 25
  };

  URL_SUMMARY: UrlSummary = {
    marketable: 3,
    clean: 19,
    analyzing: 76
  };

  job1: JobSummary = {
    id: 1,
    success: 12,
    failure: 356,
    todo: 10,
    website: 'example.com',
    started_at: new Date(2020, 0o1, 0o1, 17, 0o0, 0o1),
    finished_at: new Date(2020, 0o1, 0o1, 17, 0o3, 0o4),
  };
  job2: JobSummary = {
    id: 2,
    success: 300,
    failure: 22,
    todo: 20,
    website: 'example.com',
    started_at: new Date(2020, 0o1, 0o1, 17, 0o0, 0o1),
    finished_at: new Date(2020, 0o1, 0o1, 17, 0o3, 0o4),
  };
  job3: JobSummary = {
    id: 3,
    success: 324,
    failure: 224,
    todo: 30,
    website: 'example.com',
    started_at: new Date(2020, 0o1, 0o1, 17, 0o0, 0o1),
    finished_at: new Date(2020, 0o1, 0o1, 17, 0o3, 0o4),
  };
  LAST_JOB_SUMMARY: JobSummary = {
    id: 4,
    success: 3,
    failure: 2,
    todo: 23,
    website: 'example.com',
    started_at: new Date(2020, 0o1, 0o1, 17, 0o0, 0o1),
    finished_at: new Date(2020, 0o1, 0o1, 17, 0o3, 0o4),
  };

  JOB_SUMMARY_LIST: JobSummary[] = [
    this.job1,
    this.job2,
    this.job3
  ];

  constructor() {
  }

  getUrlSummary(): Observable<UrlSummary> {
    return of<UrlSummary>(this.URL_SUMMARY);
  }

  getWebsitesSummary(): Observable<WebsitesSummary> {
    return of<WebsitesSummary>(this.WEBSITES_SUMMARY);
  }

  getLastJobSummary(): Observable<JobSummary> {
    return of<JobSummary>(this.LAST_JOB_SUMMARY);
  }

  getJobSummaryList(): Observable<JobSummary[]> {
    return of<JobSummary[]>(this.JOB_SUMMARY_LIST);
  }

  addURL(url) {
    this.URL_SUMMARY.analyzing += 1;
  }

}
